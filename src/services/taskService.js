import api from "./api";


/*
|--------------------------------------------------------------------------
| Get All Tasks
|--------------------------------------------------------------------------
*/

const getTasks = async (params = {}) => {

    const filteredParams = Object.fromEntries(

        Object.entries(params).filter(

            ([, value]) =>

                value !== "" &&
                value !== null &&
                value !== undefined

        )

    );

    const response = await api.get(
        "/tasks",
        {
            params: filteredParams,
        }
    );

    return response.data;

};
/*
|--------------------------------------------------------------------------
| Get Single Task
|--------------------------------------------------------------------------
*/

const getTask = async (taskId) => {

    const response = await api.get(
        `/tasks/${taskId}`
    );

    return response.data;

};

/*
|--------------------------------------------------------------------------
| Create Task
|--------------------------------------------------------------------------
*/

const createTask = async (taskData) => {

    const response = await api.post(
        "/tasks",
        taskData
    );

    return response.data;

};

/*
|--------------------------------------------------------------------------
| Update Task
|--------------------------------------------------------------------------
*/

const updateTask = async (
    taskId,
    taskData
) => {

    const response = await api.put(
        `/tasks/${taskId}`,
        taskData
    );

    return response.data;

};

/*
|--------------------------------------------------------------------------
| Delete Task
|--------------------------------------------------------------------------
*/

const deleteTask = async (taskId) => {

    const response = await api.delete(
        `/tasks/${taskId}`
    );

    return response.data;

};

export default {

    getTasks,

    getTask,

    createTask,

    updateTask,

    deleteTask,

};