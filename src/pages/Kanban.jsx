import {
    useEffect,
    useMemo,
    useState,
} from "react";

import {
    useDispatch,
    useSelector,
} from "react-redux";

import {
    fetchProjects,
    selectProjects,
} from "@/redux/slices/projectSlice";

import PageHeader from "@/components/ui/PageHeader";
import KanbanHeader from "@/components/kanban/KanbanHeader";
import KanbanBoard from "@/components/kanban/KanbanBoard";
import TaskModal from "@/components/tasks/TaskModal";

import useTasks from "@/hooks/useTasks";

export default function Kanban() {

    const dispatch = useDispatch();

    const {

        tasks,

        loading,

        fetchTasks,

    } = useTasks();

    const projects = useSelector(selectProjects);

    /*
    |--------------------------------------------------------------------------
    | Filters
    |--------------------------------------------------------------------------
    */

    const [filters, setFilters] = useState({

        search: "",

        project: "",

        assignedTo: "",

        priority: "",

    });

    /*
    |--------------------------------------------------------------------------
    | Create Task Modal
    |--------------------------------------------------------------------------
    */

    const [taskModalOpen, setTaskModalOpen] = useState(false);

    /*
    |--------------------------------------------------------------------------
    | Initial Load
    |--------------------------------------------------------------------------
    */

   useEffect(() => {

    fetchTasks({
        limit: 1000,
    });

    dispatch(fetchProjects());

    // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
    /*
    |--------------------------------------------------------------------------
    | Members (Unique)
    |--------------------------------------------------------------------------
    */

    const members = useMemo(() => {

        const map = new Map();

        tasks.forEach((task) => {

            if (task.assignedTo) {

                map.set(

                    task.assignedTo._id,

                    task.assignedTo

                );

            }

        });

        return [...map.values()];

    }, [

        tasks,

    ]);

    return (

        <>

            <PageHeader

                title="Kanban"

                subtitle="Manage tasks visually."

            />

            <KanbanHeader

                filters={filters}

                setFilters={setFilters}

                projects={projects}

                members={members}

                onCreateTask={() =>

                    setTaskModalOpen(true)

                }

            />

            <KanbanBoard

                filters={filters}

            />

            <TaskModal

                open={taskModalOpen}

                task={null}

                loading={loading}

                onClose={() =>

                    setTaskModalOpen(false)

                }

            />

        </>

    );

}