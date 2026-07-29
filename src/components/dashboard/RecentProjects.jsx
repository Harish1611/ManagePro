import Card from "@/components/ui/Card";

import useDashboard from "@/hooks/useDashboard";

export default function RecentProjects() {

    const {

        recentProjects,

        loading,

    } = useDashboard();

    return (

        <Card title="Recent Projects">

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

                ) : recentProjects.length === 0 ? (

                    <p className="text-sm text-gray-500">

                        No recent projects.

                    </p>

                ) : (

                    <ul className="space-y-3">

                        {

                            recentProjects.map((project) => (

                                <li

                                    key={project._id}

                                    className="flex items-center justify-between border-b pb-3 last:border-0"

                                >

                                    <div>

                                        <h3 className="font-medium">

                                            {project.name}

                                        </h3>

                                        <p className="text-sm text-gray-500">

                                            {project.status}

                                        </p>

                                    </div>

                                    <div

                                        className="h-4 w-4 rounded-full"

                                        style={{

                                            backgroundColor:

                                                project.color ||

                                                "#3B82F6",

                                        }}

                                    />

                                </li>

                            ))

                        }

                    </ul>

                )

            }

        </Card>

    );

}