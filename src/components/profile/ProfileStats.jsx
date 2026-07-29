import {

    CheckCircle2,

    CircleDashed,

    FolderKanban,

    ListTodo,

} from "lucide-react";


export default function ProfileStats({

    profile,

}) {


    /*
    |--------------------------------------------------------------------------
    | Statistics
    |--------------------------------------------------------------------------
    */

    const stats = profile?.statistics || {};


    const statistics = [

        {

            title: "Projects",

            value:

                stats.projectsCount ??

                0,

            description: "Assigned projects",

            icon: FolderKanban,

            iconClass:

                "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400",

        },

        {

            title: "Total Tasks",

            value:

                stats.tasksCount ??

                0,

            description: "Assigned tasks",

            icon: ListTodo,

            iconClass:

                "bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400",

        },

        {

            title: "Completed",

            value:

                stats.completedTasks ??

                0,

            description: "Tasks completed",

            icon: CheckCircle2,

            iconClass:

                "bg-green-50 text-green-600 dark:bg-green-950/40 dark:text-green-400",

        },

        {

            title: "In Progress",

            value:

                stats.inProgressTasks ??

                0,

            description: "Tasks in progress",

            icon: CircleDashed,

            iconClass:

                "bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400",

        },

    ];


    return (

        <section>

            <div className="mb-4">

                <h2
                    className="
                        text-lg
                        font-semibold
                        text-gray-900
                        dark:text-white
                    "
                >

                    Overview

                </h2>

                <p
                    className="
                        mt-1
                        text-sm
                        text-gray-500
                        dark:text-gray-400
                    "
                >

                    Your current project and task statistics.

                </p>

            </div>


            <div
                className="
                    grid
                    gap-4
                    sm:grid-cols-2
                    xl:grid-cols-4
                "
            >

                {

                    statistics.map((statistic) => {

                        const Icon = statistic.icon;

                        return (

                            <article

                                key={statistic.title}

                                className="
                                    rounded-2xl
                                    border
                                    border-gray-200
                                    bg-white
                                    p-5
                                    shadow-sm
                                    transition
                                    hover:-translate-y-0.5
                                    hover:shadow-md
                                    dark:border-gray-700
                                    dark:bg-gray-900
                                "

                            >

                                <div
                                    className="
                                        flex
                                        items-start
                                        justify-between
                                        gap-4
                                    "
                                >

                                    <div>

                                        <p
                                            className="
                                                text-sm
                                                font-medium
                                                text-gray-500
                                                dark:text-gray-400
                                            "
                                        >

                                            {statistic.title}

                                        </p>

                                        <p
                                            className="
                                                mt-2
                                                text-3xl
                                                font-bold
                                                text-gray-900
                                                dark:text-white
                                            "
                                        >

                                            {statistic.value}

                                        </p>

                                    </div>


                                    <div
                                        className={`
                                            rounded-xl
                                            p-3
                                            ${statistic.iconClass}
                                        `}
                                    >

                                        <Icon size={23} />

                                    </div>

                                </div>


                                <p
                                    className="
                                        mt-4
                                        text-xs
                                        text-gray-400
                                        dark:text-gray-500
                                    "
                                >

                                    {statistic.description}

                                </p>

                            </article>

                        );

                    })

                }

            </div>

        </section>

    );

}