import api from "./api";


/*
|--------------------------------------------------------------------------
| Get All Team Members
|--------------------------------------------------------------------------
*/

const getUsers = async (params = {}) => {

    const filteredParams = Object.fromEntries(

        Object.entries(params).filter(

            ([, value]) =>

                value !== "" &&
                value !== null &&
                value !== undefined

        )

    );


    const response = await api.get(

        "/team",

        {

            params: filteredParams,

        }

    );


    return response.data;

};


/*
|--------------------------------------------------------------------------
| Get Single Member
|--------------------------------------------------------------------------
*/

const getUser = async (userId) => {


    const response = await api.get(

        `/team/${userId}`

    );


    return response.data;

};


/*
|--------------------------------------------------------------------------
| Get Member Projects
|--------------------------------------------------------------------------
*/

const getMemberProjects = async (userId) => {


    const response = await api.get(

        `/team/${userId}/projects`

    );


    return response.data;

};


/*
|--------------------------------------------------------------------------
| Get Member Tasks
|--------------------------------------------------------------------------
*/

const getMemberTasks = async (

    userId,

    params = {}

) => {


    const filteredParams = Object.fromEntries(

        Object.entries(params).filter(

            ([, value]) =>

                value !== "" &&
                value !== null &&
                value !== undefined

        )

    );


    const response = await api.get(

        `/team/${userId}/tasks`,

        {

            params: filteredParams,

        }

    );


    return response.data;

};


/*
|--------------------------------------------------------------------------
| Get Member Workload
|--------------------------------------------------------------------------
*/

const getMemberWorkload = async (userId) => {


    const response = await api.get(

        `/team/${userId}/workload`

    );


    return response.data;

};



export default {


    getUsers,

    getUser,

    getMemberProjects,

    getMemberTasks,

    getMemberWorkload,


};