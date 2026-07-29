import {
    FolderKanban,
    Users,
    CheckCircle,
    Clock,
} from "lucide-react";

export default function MemberProjects({

    projects = [],

}) {


    if (!projects.length) {

        return (

            <div className="rounded-xl border p-6 text-center text-gray-500 dark:border-gray-700 dark:text-gray-400">

                No projects assigned.

            </div>

        );

    }


    return (

        <div className="space-y-4">


            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">

                Assigned Projects

            </h2>


            <div className="grid gap-4 md:grid-cols-2">


                {

                    projects.map((project) => (

                        <div

                            key={project._id}

                            className="rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-900"

                        >


                            {/* Header */}

                            <div className="flex items-start justify-between">


                                <div className="flex items-center gap-3">


                                    <div

                                        className="h-10 w-10 rounded-lg"

                                        style={{

                                            backgroundColor:

                                                project.color || "#2563EB",

                                        }}

                                    />


                                    <div>

                                        <h3 className="font-semibold text-gray-900 dark:text-white">

                                            {project.name}

                                        </h3>


                                        <p className="text-sm text-gray-500 dark:text-gray-400">

                                            {project.role || "Member"}

                                        </p>

                                    </div>


                                </div>


                            </div>



                            {/* Description */}

                            {

                                project.description &&

                                <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">

                                    {project.description}

                                </p>

                            }



                            {/* Stats */}

                            <div className="mt-5 grid grid-cols-3 gap-3">


                                <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-800">


                                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">

                                        <CheckCircle size={16}/>

                                        <span className="text-xs">

                                            Progress

                                        </span>

                                    </div>


                                    <p className="mt-1 font-semibold text-gray-900 dark:text-white">

                                        {project.progress || 0}%

                                    </p>


                                </div>



                                <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-800">


                                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">

                                        <Users size={16}/>

                                        <span className="text-xs">

                                            Members

                                        </span>

                                    </div>


                                    <p className="mt-1 font-semibold text-gray-900 dark:text-white">

                                        {

                                            project.members?.length || 0

                                        }

                                    </p>


                                </div>



                                <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-800">


                                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">

                                        <Clock size={16}/>

                                        <span className="text-xs">

                                            Tasks

                                        </span>

                                    </div>


                                    <p className="mt-1 font-semibold text-gray-900 dark:text-white">

                                        {

                                            project.taskCount || 0

                                        }

                                    </p>


                                </div>


                            </div>



                            {/* Progress Bar */}

                            <div className="mt-4">


                                <div className="h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">


                                    <div

                                        className="h-full rounded-full bg-blue-600"

                                        style={{

                                            width:

                                                `${project.progress || 0}%`,

                                        }}

                                    />


                                </div>


                            </div>


                        </div>


                    ))

                }


            </div>


        </div>

    );

}