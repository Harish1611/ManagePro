import {

    CalendarDays,

} from "lucide-react";

import TaskPriorityBadge from "@/components/tasks/TaskPriorityBadge";

import TaskStatusBadge from "@/components/tasks/TaskStatusBadge";


export default function MemberTasks({

    tasks = [],

}) {


    if (!tasks.length) {

        return (

            <div className="rounded-xl border p-6 text-center text-gray-500 dark:border-gray-700 dark:text-gray-400">

                No assigned tasks.

            </div>

        );

    }


    return (

        <div className="space-y-4">


            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">

                Assigned Tasks

            </h2>



            <div className="overflow-x-auto rounded-xl border dark:border-gray-700">


                <table className="min-w-full divide-y dark:divide-gray-700">


                    <thead className="bg-gray-50 dark:bg-gray-800">


                        <tr>


                            <th className="px-5 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">

                                Task

                            </th>


                            <th className="px-5 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">

                                Project

                            </th>


                            <th className="px-5 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">

                                Priority

                            </th>


                            <th className="px-5 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">

                                Status

                            </th>


                            <th className="px-5 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">

                                Due Date

                            </th>


                        </tr>


                    </thead>



                    <tbody className="divide-y bg-white dark:divide-gray-700 dark:bg-gray-900">


                        {

                            tasks.map((task) => (


                                <tr

                                    key={task._id}

                                    className="hover:bg-gray-50 dark:hover:bg-gray-800"

                                >


                                    <td className="px-5 py-4">


                                        <p className="font-medium text-gray-900 dark:text-white">

                                            {task.title}

                                        </p>


                                        {

                                            task.description &&

                                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 line-clamp-1">

                                                {task.description}

                                            </p>

                                        }


                                    </td>



                                    <td className="px-5 py-4 text-sm text-gray-600 dark:text-gray-400">


                                        {

                                            task.project?.name ||

                                            "-"

                                        }


                                    </td>



                                    <td className="px-5 py-4">


                                        <TaskPriorityBadge

                                            priority={task.priority}

                                        />


                                    </td>



                                    <td className="px-5 py-4">


                                        <TaskStatusBadge

                                            status={task.status}

                                        />


                                    </td>



                                    <td className="px-5 py-4">


                                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">


                                            <CalendarDays size={16}/>


                                            {

                                                task.dueDate

                                                ?

                                                new Date(

                                                    task.dueDate

                                                ).toLocaleDateString()

                                                :

                                                "No Date"

                                            }


                                        </div>


                                    </td>


                                </tr>


                            ))

                        }


                    </tbody>


                </table>


            </div>


        </div>

    );

}