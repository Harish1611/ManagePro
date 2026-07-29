import { useEffect } from "react";

import {

    FaProjectDiagram,

    FaTasks,

    FaCheckCircle,

    FaExclamationTriangle,

    FaClipboardList,

    FaFolderOpen,

} from "react-icons/fa";

import DashboardCard from "./DashboardCard";

import useDashboard from "@/hooks/useDashboard";

export default function StatsGrid() {

    const {

        summary,

        loading,

        fetchDashboard,

    } = useDashboard();

    useEffect(() => {

        fetchDashboard();

    }, []);

    const stats = [

        {

            title: "Total Projects",

            value: summary.totalProjects,

            color: "bg-blue-600",

            icon: <FaFolderOpen />,

        },

        {

            title: "Active Projects",

            value: summary.activeProjects,

            color: "bg-cyan-600",

            icon: <FaProjectDiagram />,

        },

        {

            title: "Total Tasks",

            value: summary.totalTasks,

            color: "bg-green-600",

            icon: <FaTasks />,

        },

        {

            title: "Completed Tasks",

            value: summary.completedTasks,

            color: "bg-emerald-600",

            icon: <FaCheckCircle />,

        },

        {

            title: "Overdue Tasks",

            value: summary.overdueTasks,

            color: "bg-red-600",

            icon: <FaExclamationTriangle />,

        },

        {

            title: "My Tasks",

            value: summary.myTasks,

            color: "bg-purple-600",

            icon: <FaClipboardList />,

        },

    ];

    return (

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

            {

                stats.map((item) => (

                    <DashboardCard

                        key={item.title}

                        title={item.title}

                        value={

                            loading

                                ? "..."

                                : item.value

                        }

                        color={item.color}

                        icon={item.icon}

                    />

                ))

            }

        </div>

    );

}