import Card from "@/components/ui/Card";

import useDashboard from "@/hooks/useDashboard";

export default function RecentTasks() {

    const {

        recentTasks,

        loading,

    } = useDashboard();

    return (

        <Card title="Recent Tasks">

            {

                loading ? (

                    <div className="space-y-3">

                        {

                            [...Array(5)].map((_, index) => (

                                <div

                                    key={index}

                                    className="h-10 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800"

                                />

                            ))

                        }

                    </div>

                ) : recentTasks.length === 0 ? (

                    <p className="text-sm text-gray-500">

                        No recent tasks.

                    </p>

                ) : (

                    <ul className="space-y-3">

                        {

                            recentTasks.map((task) => (

                                <li

                                    key={task._id}

                                    className="border-b pb-3 last:border-0"

                                >

                                    <div className="flex items-center justify-between">

                                        <h3 className="font-medium">

                                            {task.title}

                                        </h3>

                                        <span

                                            className={`rounded-full px-2 py-1 text-xs font-medium

                                            ${

                                                task.status === "Completed"

                                                    ? "bg-green-100 text-green-700"

                                                    : task.status === "In Progress"

                                                        ? "bg-blue-100 text-blue-700"

                                                        : task.status === "Pending"

                                                            ? "bg-yellow-100 text-yellow-700"

                                                            : "bg-gray-100 text-gray-700"

                                            }`}

                                        >

                                            {task.status}

                                        </span>

                                    </div>

                                    <p className="mt-1 text-sm text-gray-500">

                                        {task.project?.name || "No Project"}

                                    </p>

                                </li>

                            ))

                        }

                    </ul>

                )

            }

        </Card>

    );

}