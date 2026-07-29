import {
    useEffect,
    useMemo,
    useState,
} from "react";

import { useDispatch, useSelector  } from "react-redux";



import {
    DndContext,
    PointerSensor,
    closestCorners,
    DragOverlay,
    useSensor,
    useSensors,
} from "@dnd-kit/core";

import {
    restrictToWindowEdges,
} from "@dnd-kit/modifiers";

import {
    SortableContext,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { toast } from "react-hot-toast";

import useTasks from "@/hooks/useTasks";

import { TASK_STATUS } from "@/constants/taskConstants";

import KanbanSkeleton from "./KanbanSkeleton";
import KanbanColumn from "./KanbanColumn";
import KanbanTaskCard from "./KanbanTaskCard";

import TaskModal from "@/components/tasks/TaskModal";
import DeleteTaskModal from "@/components/tasks/DeleteTaskModal";

export default function KanbanBoard({

    filters,

}) {

    const {

        tasks,

        loading,

        updateTask,

    } = useTasks();



    /*
    |--------------------------------------------------------------------------
    | Board State
    |--------------------------------------------------------------------------
    */

    const [board, setBoard] = useState({});

    const [activeTask, setActiveTask] = useState(null);

   


const filteredTasks = useMemo(() => {

    return tasks.filter((task) => {

        if (

            filters.search &&

            !task.title

                .toLowerCase()

                .includes(filters.search.toLowerCase())

        ) {

            return false;

        }

        if (

            filters.project &&

            task.project?._id !== filters.project

        ) {

            return false;

        }

        if (

            filters.priority &&

            task.priority !== filters.priority

        ) {

            return false;

        }

        if (

            filters.assignedTo &&

            task.assignedTo?._id !== filters.assignedTo

        ) {

            return false;

        }

        return true;

    });

}, [

    tasks,

    filters,

]);

    /*
    |--------------------------------------------------------------------------
    | Task Modal
    |--------------------------------------------------------------------------
    */

    const [editingTask, setEditingTask] = useState(null);

    const [taskModalOpen, setTaskModalOpen] = useState(false);

    /*
    |--------------------------------------------------------------------------
    | Delete Modal
    |--------------------------------------------------------------------------
    */

    const [deleteTask, setDeleteTask] = useState(null);

    const [deleteModalOpen, setDeleteModalOpen] = useState(false);

    /*
    |--------------------------------------------------------------------------
    | Sensors
    |--------------------------------------------------------------------------
    */

    const sensors = useSensors(

        useSensor(
            PointerSensor,
            {
                activationConstraint: {
                    distance: 6,
                },
            }
        )

    );

 
    

    /*
    |--------------------------------------------------------------------------
    | Build Columns
    |--------------------------------------------------------------------------
    */

    useEffect(() => {

        const grouped = {};

        TASK_STATUS.forEach(status => {

            grouped[status] = [];

        });

       filteredTasks.forEach((task) => {

    if (grouped[task.status]) {

        grouped[task.status].push(task);

    }

});

        setBoard(grouped);

    }, [filteredTasks]);

    /*
    |--------------------------------------------------------------------------
    | Helpers
    |--------------------------------------------------------------------------
    */

    const getTasksByStatus = (status) =>

        board[status] || [];

    const findTask = (taskId) => {

        for (const status of TASK_STATUS) {

            const task = board[status]?.find(

                t => t._id === taskId

            );

            if (task) {

                return {

                    task,

                    status,

                };

            }

        }

        return null;

    };

    /*
    |--------------------------------------------------------------------------
    | Drag Start
    |--------------------------------------------------------------------------
    */

    const handleDragStart = ({ active }) => {

        const result = findTask(active.id);

        if (result) {

            setActiveTask(result.task);

        }

    };

    /*
    |--------------------------------------------------------------------------
    | Drag Over
    |--------------------------------------------------------------------------
    */

    const handleDragOver = ({ active, over }) => {

        if (!over) return;

        const activeResult = findTask(active.id);

        if (!activeResult) return;

        const from = activeResult.status;

        let to = over.id;

        if (!TASK_STATUS.includes(to)) {

            const overTask = findTask(over.id);

            if (!overTask) return;

            to = overTask.status;

        }

        if (from === to) return;

        setBoard(prev => {

            const next = {

                ...prev,

            };

            const task = prev[from].find(

                t => t._id === active.id

            );

            next[from] = prev[from].filter(

                t => t._id !== active.id

            );

            next[to] = [

                {

                    ...task,

                    status: to,

                },

                ...prev[to],

            ];

            return next;

        });

    };

    /*
    |--------------------------------------------------------------------------
    | Drag End
    |--------------------------------------------------------------------------
    */

    const handleDragEnd = async ({ active, over }) => {

        setActiveTask(null);

        if (!over) return;

        const taskInfo = findTask(active.id);

        if (!taskInfo) return;

        const previousStatus = taskInfo.status;

        let newStatus = over.id;

        if (!TASK_STATUS.includes(newStatus)) {

            const overTask = findTask(over.id);

            if (!overTask) return;

            newStatus = overTask.status;

        }

        if (previousStatus === newStatus) {

            return;

        }

        const previousBoard = structuredClone(board);

        try {

            await updateTask(

                active.id,

                {

                    status: newStatus,

                }

            ).unwrap();

        }

        catch {

            toast.error(

                "Failed to update task"

            );

            setBoard(previousBoard);

        }

    };

    /*
    |--------------------------------------------------------------------------
    | Edit/Delete
    |--------------------------------------------------------------------------
    */

    const handleEdit = (task) => {

        setEditingTask(task);

        setTaskModalOpen(true);

    };

    const handleDelete = (task) => {

        setDeleteTask(task);

        setDeleteModalOpen(true);

    };

    /*
    |--------------------------------------------------------------------------
    | Loading
    |--------------------------------------------------------------------------
    */

    if (loading) {

        return <KanbanSkeleton />;

    }

    /*
    |--------------------------------------------------------------------------
    | Render
    |--------------------------------------------------------------------------
    */

    return (

        <>


            <DndContext

                sensors={sensors}

                collisionDetection={closestCorners}

                modifiers={[restrictToWindowEdges]}

                onDragStart={handleDragStart}

                onDragOver={handleDragOver}

                onDragEnd={handleDragEnd}

            >

                <div className="grid gap-6 lg:grid-cols-4">

                    {

                        TASK_STATUS.map(status => {

                            const columnTasks =

                                getTasksByStatus(status);

                            return (

                                <SortableContext

                                    key={status}

                                    id={status}

                                    items={

                                        columnTasks.map(

                                            task => task._id

                                        )

                                    }

                                    strategy={

                                        verticalListSortingStrategy

                                    }

                                >

                                  <KanbanColumn
    status={status}
    tasks={columnTasks}
    onEdit={handleEdit}
    onDelete={handleDelete}
/>

                                </SortableContext>

                            );

                        })

                    }

                </div>

                <DragOverlay>

                    {

                        activeTask && (

                            <div className="rotate-2 opacity-90 shadow-2xl">

                                <KanbanTaskCard

                                    task={activeTask}

                                />

                            </div>

                        )

                    }

                </DragOverlay>

            </DndContext>

            <TaskModal

                open={taskModalOpen}

                task={editingTask}

                loading={loading}

                onClose={() => {

                    setTaskModalOpen(false);

                    setEditingTask(null);

                }}

            />

            <DeleteTaskModal

                open={deleteModalOpen}

                task={deleteTask}

                onClose={() => {

                    setDeleteModalOpen(false);

                    setDeleteTask(null);

                }}

            />

        </>

    );

}