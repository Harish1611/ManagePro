import Card from "@/components/ui/Card";

import useDashboard from "@/hooks/useDashboard";

import {

    ResponsiveContainer,

    BarChart,

    Bar,

    XAxis,

    YAxis,

    CartesianGrid,

    Tooltip,

    LabelList,

} from "recharts";

export default function ProjectProgressChart() {

    const {

        projectProgress,

        loading,

    } = useDashboard();

    if (loading) {

        return (

            <Card title="Project Progress">

                <div className="flex h-96 items-center justify-center">

                    <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />

                </div>

            </Card>

        );

    }

    if (!projectProgress.length) {

        return (

            <Card title="Project Progress">

                <div className="flex h-96 items-center justify-center text-gray-500">

                    No projects found

                </div>

            </Card>

        );

    }

    return (

        <Card title="Project Progress">

            <div className="h-96">

                <ResponsiveContainer>

                    <BarChart

                        data={projectProgress}

                        layout="vertical"

                        margin={{

                            top: 20,

                            right: 30,

                            left: 50,

                            bottom: 10,

                        }}

                    >

                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis

                            type="number"

                            domain={[0, 100]}

                            unit="%"

                        />

                        <YAxis

                            type="category"

                            dataKey="name"

                            width={120}

                        />

                        <Tooltip

                            formatter={(value) => `${value}%`}

                        />

                        <Bar

                            dataKey="progress"

                            radius={[0, 6, 6, 0]}

                            fill="#3B82F6"

                        >

                            <LabelList

                                dataKey="progress"

                                position="right"

                                formatter={(value) => `${value}%`}

                            />

                        </Bar>

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </Card>

    );

}