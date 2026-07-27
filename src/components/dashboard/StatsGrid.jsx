import {

    FaTasks,

    FaProjectDiagram,

    FaUsers,

    FaCheckCircle

} from "react-icons/fa";

import DashboardCard from "./DashboardCard";

export default function StatsGrid() {

    return (

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

            <DashboardCard

                title="Projects"

                value="12"

                color="bg-blue-600"

                icon={<FaProjectDiagram />}

            />

            <DashboardCard

                title="Tasks"

                value="245"

                color="bg-green-600"

                icon={<FaTasks />}

            />

            <DashboardCard

                title="Members"

                value="18"

                color="bg-purple-600"

                icon={<FaUsers />}

            />

            <DashboardCard

                title="Completed"

                value="162"

                color="bg-orange-500"

                icon={<FaCheckCircle />}

            />

        </div>

    );

}