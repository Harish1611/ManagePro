import PageHeader from "@/components/ui/PageHeader";

import StatsGrid from "@/components/dashboard/StatsGrid";

import RecentProjects from "@/components/dashboard/RecentProjects";

import RecentTasks from "@/components/dashboard/RecentTasks";

import QuickActions from "@/components/dashboard/QuickActions";

import TaskStatusChart from "@/components/dashboard/TaskStatusChart";

import TaskPriorityChart from "@/components/dashboard/TaskPriorityChart";
import ProjectProgressChart from "@/components/dashboard/ProjectProgressChart";

export default function Dashboard() {

    return (

      <>
      <PageHeader />

<StatsGrid />

<div className="mt-8">
    <QuickActions />
</div>

<div className="grid gap-6 mt-8 lg:grid-cols-2">
    <TaskStatusChart />
    <TaskPriorityChart />
</div>

<div className="mt-8">
    <ProjectProgressChart />
</div>

<div className="grid gap-6 mt-8 lg:grid-cols-2">
    <RecentProjects />
    <RecentTasks />
</div>
</>

    );

}