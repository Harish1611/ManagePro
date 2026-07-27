import PageHeader from "@/components/ui/PageHeader";

import StatsGrid from "@/components/dashboard/StatsGrid";

import RecentProjects from "@/components/dashboard/RecentProjects";

import RecentTasks from "@/components/dashboard/RecentTasks";

import QuickActions from "@/components/dashboard/QuickActions";

export default function Dashboard() {

    return (

        <>

            <PageHeader

                title="Dashboard"

                subtitle="Welcome back! Here's an overview of your workspace."

            />

            <StatsGrid />

            <div className="grid gap-6 mt-8 lg:grid-cols-2">

                <RecentProjects />

                <RecentTasks />

            </div>

            <div className="mt-8">

                <QuickActions />

            </div>

        </>

    );

}