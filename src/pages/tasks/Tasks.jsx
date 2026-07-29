
import { useEffect, useMemo, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
    fetchProjects,
    selectProjects,
} from "@/redux/slices/projectSlice";

import useTasks from "@/hooks/useTasks";
import useTaskFilters from "@/hooks/useTaskFilters";

import TaskHeader from "@/components/tasks/TaskHeader";
import TaskToolbar from "@/components/tasks/TaskToolbar";

import TaskGrid from "@/components/tasks/TaskGrid";
import TaskTable from "@/components/tasks/TaskTable";

import TaskSkeleton from "@/components/tasks/TaskSkeleton";
import EmptyTasks from "@/components/tasks/EmptyTasks";
import ErrorTasks from "@/components/tasks/ErrorTasks";

import TaskModal from "@/components/tasks/TaskModal";
import DeleteTaskModal from "@/components/tasks/DeleteTaskModal";

/*
|--------------------------------------------------------------------------
| Optional Hooks
|--------------------------------------------------------------------------
| Used to populate filter dropdowns.
| If you haven't created these hooks yet,
| simply replace with empty arrays.
|--------------------------------------------------------------------------
*/

// import useProjects from "@/hooks/useProjects";
// import useUsers from "@/hooks/useUsers";

export default function Tasks() {

    const dispatch = useDispatch();

    const projects = useSelector(selectProjects);

    /*
    |--------------------------------------------------------------------------
    | Redux
    |--------------------------------------------------------------------------
    */

    const {

        tasks,

        pagination,

        loading,

        error,

        fetchTasks,

    } = useTasks();

    /*
    |--------------------------------------------------------------------------
    | Filters
    |--------------------------------------------------------------------------
    */

    const {

        filters,

        setFilters,

    } = useTaskFilters(fetchTasks);

    /*
    |--------------------------------------------------------------------------
    | UI State
    |--------------------------------------------------------------------------
    */

    const [view, setView] = useState("grid");

    const [

        selectedTask,

        setSelectedTask,

    ] = useState(null);

    const [

        showModal,

        setShowModal,

    ] = useState(false);

    const [

        deleteModal,

        setDeleteModal,

    ] = useState(false);

    /*
    |--------------------------------------------------------------------------
    | Filter Data
    |--------------------------------------------------------------------------
    */

   const users = useMemo(() => {

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

}, [tasks]);

    /*
    |--------------------------------------------------------------------------
    | Initial Fetch
    |--------------------------------------------------------------------------
    */

    useEffect(() => {

    dispatch(fetchProjects());

}, [dispatch]);

    useEffect(() => {

        fetchTasks(filters);

    }, [filters]);

    /*
    |--------------------------------------------------------------------------
    | Create
    |--------------------------------------------------------------------------
    */

    const handleCreate = () => {

        setSelectedTask(null);

        setShowModal(true);

    };

    /*
    |--------------------------------------------------------------------------
    | Edit
    |--------------------------------------------------------------------------
    */

    const handleEdit = (task) => {

        setSelectedTask(task);

        setShowModal(true);

    };

    /*
    |--------------------------------------------------------------------------
    | Delete
    |--------------------------------------------------------------------------
    */

    const handleDelete = (task) => {

        setSelectedTask(task);

        setDeleteModal(true);

    };

    /*
    |--------------------------------------------------------------------------
    | Render
    |--------------------------------------------------------------------------
    */

    return (

        <div className="space-y-6">

            {/* Header */}

            <TaskHeader

                onCreate={handleCreate}

            />

            {/* Toolbar */}

            <TaskToolbar

                filters={filters}

                setFilters={setFilters}

                view={view}

                setView={setView}

                projects={projects}

                users={users}

            />

            {/* Loading */}

            {

                loading &&

                <TaskSkeleton />

            }

            {/* Error */}

            {

                !loading &&

                error &&

                <ErrorTasks

                    message={error}

                    retry={() =>

                        fetchTasks(filters)

                    }

                />

            }

            {/* Empty */}

            {

                !loading &&

                !error &&

                tasks.length === 0 &&

                <EmptyTasks

                    onCreate={handleCreate}

                />

            }

            {/* Content */}

            {

                !loading &&

                !error &&

                tasks.length > 0 &&

                (

                    view === "grid"

                        ?

                        <TaskGrid

                            tasks={tasks}

                            onEdit={handleEdit}

                            onDelete={handleDelete}

                        />

                        :

                        <TaskTable

                            tasks={tasks}

                            pagination={pagination}

                            filters={filters}

                            setFilters={setFilters}

                            onEdit={handleEdit}

                            onDelete={handleDelete}

                        />

                )

            }

            {/* Create / Edit */}

            <TaskModal

                open={showModal}

                task={selectedTask}

                loading={loading}

                onClose={() => {

                    setShowModal(false);

                    setSelectedTask(null);

                }}

            />

            {/* Delete */}

            <DeleteTaskModal

                open={deleteModal}

                task={selectedTask}

                loading={loading}

                onClose={() => {

                    setDeleteModal(false);

                    setSelectedTask(null);

                }}

            />

        </div>

    );

}