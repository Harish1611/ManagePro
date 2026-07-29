import {
    useEffect,
} from "react";

import {
    useParams,
    useNavigate,
} from "react-router-dom";


import useUsers from "@/hooks/useUsers";
import useMemberProjects from "@/hooks/useMemberProjects";
import useMemberTasks from "@/hooks/useMemberTasks";
import useMemberWorkload from "@/hooks/useMemberWorkload";


import MemberProfileCard from "@/components/team/MemberProfileCard";

import MemberProjects from "@/components/team/MemberProjects";
import MemberTasks from "@/components/team/MemberTasks";
import MemberWorkload from "@/components/team/MemberWorkload";
import MemberActivity from "@/components/team/MemberActivity";



export default function MemberProfile() {


    const {

        id,

    } = useParams();



    const navigate = useNavigate();



    /*
    |--------------------------------------------------------------------------
    | Member
    |--------------------------------------------------------------------------
    */


    const {

        user,

        loading:userLoading,

        fetchUser,

    } = useUsers();



    /*
    |--------------------------------------------------------------------------
    | Projects
    |--------------------------------------------------------------------------
    */


    const {

        projects,

        loading:projectsLoading,

        fetchMemberProjects,

    } = useMemberProjects();



    /*
    |--------------------------------------------------------------------------
    | Tasks
    |--------------------------------------------------------------------------
    */


    const {

        tasks,

        loading:tasksLoading,

        fetchMemberTasks,

    } = useMemberTasks();



    /*
    |--------------------------------------------------------------------------
    | Workload
    |--------------------------------------------------------------------------
    */


    const {

        workload,

        loading:workloadLoading,

        fetchMemberWorkload,

    } = useMemberWorkload();



    /*
    |--------------------------------------------------------------------------
    | Initial Load
    |--------------------------------------------------------------------------
    */


    useEffect(()=>{


        if(!id) return;


        fetchUser(id);


        fetchMemberProjects(id);


        fetchMemberTasks(

            id,

            {

                page:1,

                limit:10,

            }

        );


        fetchMemberWorkload(id);


    },[id]);



    /*
    |--------------------------------------------------------------------------
    | Loading
    |--------------------------------------------------------------------------
    */


    if(userLoading){


        return (

            <div className="
                flex
                h-64
                items-center
                justify-center
                text-gray-500
                dark:text-gray-400
            ">

                Loading member profile...

            </div>

        );


    }



    /*
    |--------------------------------------------------------------------------
    | Error / Not Found
    |--------------------------------------------------------------------------
    */


    if(!user){


        return (

            <div className="
                rounded-xl
                border
                bg-white
                p-8
                text-center
                dark:border-gray-700
                dark:bg-gray-900
            ">


                <p className="
                    text-gray-600
                    dark:text-gray-400
                ">

                    Member not found

                </p>



                <button

                    onClick={()=>navigate("/team")}

                    className="
                        mt-4
                        rounded-lg
                        bg-blue-600
                        px-4
                        py-2
                        text-white
                    "

                >

                    Back To Team

                </button>


            </div>

        );


    }



    return (

        <div className="space-y-6">


            {/* Profile */}

            <MemberProfileCard

                user={user}

            />



            {/* Workload */}

            <MemberWorkload

                workload={workload}

                loading={workloadLoading}

            />



            <div className="
                grid
                gap-6
                xl:grid-cols-2
            ">


                {/* Projects */}

                <MemberProjects

                    projects={projects}

                    loading={projectsLoading}

                />



                {/* Tasks */}

                <MemberTasks

                    tasks={tasks}

                    loading={tasksLoading}

                />


            </div>



            {/* Activity */}

            <MemberActivity

                user={user}

            />


        </div>

    );

}