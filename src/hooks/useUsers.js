import {
    useDispatch,
    useSelector,
} from "react-redux";


import {

    fetchUsers,

    fetchUser,

    clearUser,

    clearUserError,


    selectUsers,

    selectUser,

    selectUserPagination,

    selectUserLoading,

    selectUserError,


} from "@/redux/slices/userSlice";



export default function useUsers() {


    const dispatch = useDispatch();



    /*
    |--------------------------------------------------------------------------
    | Redux State
    |--------------------------------------------------------------------------
    */


    const users = useSelector(

        selectUsers

    );


    const user = useSelector(

        selectUser

    );


    const pagination = useSelector(

        selectUserPagination

    );


    const loading = useSelector(

        selectUserLoading

    );


    const error = useSelector(

        selectUserError

    );



    /*
    |--------------------------------------------------------------------------
    | API Actions
    |--------------------------------------------------------------------------
    */


    const getUsers = (params = {}) =>

        dispatch(

            fetchUsers(params)

        );



    const getUser = (userId) =>

        dispatch(

            fetchUser(userId)

        );



    /*
    |--------------------------------------------------------------------------
    | Utility Actions
    |--------------------------------------------------------------------------
    */


    const resetSelectedUser = () =>

        dispatch(

            clearUser()

        );



    const clearError = () =>

        dispatch(

            clearUserError()

        );



    /*
    |--------------------------------------------------------------------------
    | Return
    |--------------------------------------------------------------------------
    */
console.log("x Redux users:", users);

    return {


        /*
        |--------------------------------------------------------------------------
        | State
        |--------------------------------------------------------------------------
        */


        users,


        user,


        pagination,


        loading,


        error,



        /*
        |--------------------------------------------------------------------------
        | API
        |--------------------------------------------------------------------------
        */


        fetchUsers: getUsers,


        fetchUser: getUser,



        /*
        |--------------------------------------------------------------------------
        | Helpers
        |--------------------------------------------------------------------------
        */


        clearUser: resetSelectedUser,


        clearError,


    };


}

