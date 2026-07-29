import {
    useEffect,
    useState,
} from "react";


import useUsers from "@/hooks/useUsers";


import MemberHeader from "@/components/team/MemberHeader";
import MemberFilters from "@/components/team/MemberFilters";
import MemberTable from "@/components/team/MemberTable";
import MemberGrid from "@/components/team/MemberGrid";

import TeamSkeleton from "@/components/team/TeamSkeleton";
import EmptyMembers from "@/components/team/EmptyMembers";



export default function Team() {


    /*
    |--------------------------------------------------------------------------
    | Hooks
    |--------------------------------------------------------------------------
    */


    const {

        users,

        pagination,

        loading,

        error,

        fetchUsers,

    } = useUsers();



    /*
    |--------------------------------------------------------------------------
    | View State
    |--------------------------------------------------------------------------
    */


    const [view, setView] = useState("table");



    /*
    |--------------------------------------------------------------------------
    | Filters
    |--------------------------------------------------------------------------
    */


    const [filters, setFilters] = useState({


        page: 1,


        limit: 10,


        search: "",


        sort: "-createdAt",


    });



    /*
    |--------------------------------------------------------------------------
    | Initial Fetch
    |--------------------------------------------------------------------------
    */


    useEffect(() => {


        fetchUsers(filters);


    }, [filters]);



    /*
    |--------------------------------------------------------------------------
    | Invite Member
    |--------------------------------------------------------------------------
    */


    const handleInvite = () => {


        console.log(

            "Invite member"

        );


        // Future:
        // Open Invite Member Modal


    };



    /*
    |--------------------------------------------------------------------------
    | Pagination
    |--------------------------------------------------------------------------
    */


    const changePage = (page) => {


        setFilters((prev)=>({


            ...prev,


            page,


        }));


    };



    /*
    |--------------------------------------------------------------------------
    | Render
    |--------------------------------------------------------------------------
    */


    return (

        <div className="space-y-6">


            {/* Header */}

            <MemberHeader

                onInvite={handleInvite}

                view={view}

                setView={setView}

            />



            {/* Filters */}

            <MemberFilters

                filters={filters}

                setFilters={setFilters}

            />



            {/* Loading */}

            {

                loading &&

                <TeamSkeleton />

            }



            {/* Error */}

            {

                !loading &&

                error &&

                (

                    <div

                        className="
                        rounded-lg
                        border
                        border-red-300
                        bg-red-50
                        p-4
                        text-red-700
                        dark:border-red-800
                        dark:bg-red-900/20
                        dark:text-red-400
                        "

                    >

                        {error}

                    </div>

                )

            }



            {/* Empty */}

            {

                !loading &&

                !error &&

                users.length === 0 &&

                (

                    <EmptyMembers />

                )

            }



            {/* Members */}

            {

                !loading &&

                !error &&

                users.length > 0 &&

                (

                    view === "table"

                    ?

                    <MemberTable

                        members={users}

                        pagination={pagination}

                        onPageChange={changePage}

                    />

                    :

                    <MemberGrid

                        members={users}

                    />

                )

            }


        </div>

    );

}