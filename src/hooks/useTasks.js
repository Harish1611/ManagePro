import { useDispatch, useSelector } from "react-redux";

import {
    fetchTasks,
    fetchTask,
    createTask,
    updateTask,
    deleteTask,

    clearTask,
    clearTaskError,

    selectTasks,
    selectTask,
    selectTaskLoading,
    selectTaskError,
    selectTaskPagination,

} from "@/redux/slices/taskSlice";

export default function useTasks() {

    const dispatch = useDispatch();

    /*
    |--------------------------------------------------------------------------
    | Redux State
    |--------------------------------------------------------------------------
    */

    const tasks = useSelector(
        selectTasks
    );

    const task = useSelector(
        selectTask
    );

    const pagination = useSelector(
        selectTaskPagination
    );

    const loading = useSelector(
        selectTaskLoading
    );

    const error = useSelector(
        selectTaskError
    );

    /*
    |--------------------------------------------------------------------------
    | API Actions
    |--------------------------------------------------------------------------
    */

    const getTasks = (params = {}) =>
        dispatch(
            fetchTasks(params)
        );

    const getTask = (taskId) =>
        dispatch(
            fetchTask(taskId)
        );

    const addTask = (taskData) =>
        dispatch(
            createTask(taskData)
        );

    const editTask = (
        taskId,
        taskData
    ) =>
        dispatch(
            updateTask({
                taskId,
                taskData,
            })
        );

    const removeTask = (taskId) =>
        dispatch(
            deleteTask(taskId)
        );

    /*
    |--------------------------------------------------------------------------
    | Utility Actions
    |--------------------------------------------------------------------------
    */

    const resetSelectedTask = () =>
        dispatch(
            clearTask()
        );

    const clearError = () =>
        dispatch(
            clearTaskError()
        );

    /*
    |--------------------------------------------------------------------------
    | Return
    |--------------------------------------------------------------------------
    */

    return {

        /*
        |--------------------------------------------------------------------------
        | State
        |--------------------------------------------------------------------------
        */

        tasks,

        task,

        pagination,

        loading,

        error,

        /*
        |--------------------------------------------------------------------------
        | CRUD
        |--------------------------------------------------------------------------
        */

        fetchTasks: getTasks,

        fetchTask: getTask,

        createTask: addTask,

        updateTask: editTask,

        deleteTask: removeTask,

        /*
        |--------------------------------------------------------------------------
        | Helpers
        |--------------------------------------------------------------------------
        */

        clearTask: resetSelectedTask,

        clearError,

    };

}