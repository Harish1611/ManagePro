import Card from "@/components/ui/Card";

import { useNavigate } from "react-router-dom";

import {

    FaFolderPlus,

    FaTasks,

    FaUsers,

    FaChartLine,

} from "react-icons/fa";

export default function QuickActions() {

    const navigate = useNavigate();

    const actions = [

        {

            title: "New Project",

            description: "Create a new project",

            icon: <FaFolderPlus size={22} />,

            color: "bg-blue-600",

            path: "/projects",

        },

        {

            title: "New Task",

            description: "Create and assign tasks",

            icon: <FaTasks size={22} />,

            color: "bg-green-600",

            path: "/tasks",

        },

        {

            title: "Members",

            description: "Manage project members",

            icon: <FaUsers size={22} />,

            color: "bg-purple-600",

            path: "/members",

        },

        {

            title: "Projects",

            description: "View all projects",

            icon: <FaChartLine size={22} />,

            color: "bg-orange-500",

            path: "/projects",

        },

    ];

    return (

        <Card title="Quick Actions">

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

                {

                    actions.map((action) => (

                        <button

                            key={action.title}

                            onClick={() =>

                                navigate(action.path)

                            }

                            className="group rounded-xl border border-gray-200 bg-white p-5 text-left transition-all hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900"

                        >

                            <div

                                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg text-white ${action.color}`}

                            >

                                {action.icon}

                            </div>

                            <h3 className="font-semibold">

                                {action.title}

                            </h3>

                            <p className="mt-1 text-sm text-gray-500">

                                {action.description}

                            </p>

                        </button>

                    ))

                }

            </div>

        </Card>

    );

}