import Card from "@/components/ui/Card";

import useDashboard from "@/hooks/useDashboard";

import {

    PieChart,

    Pie,

    Cell,

    ResponsiveContainer,

    Tooltip,

    Legend,

} from "recharts";

const COLORS = [

    "#3B82F6",

    "#10B981",

    "#F59E0B",

    "#EF4444",

    "#8B5CF6",

    "#6B7280",

];

export default function TaskStatusChart() {

    const {

        statusChart,

        loading,

    } = useDashboard();

    if (loading) {

        return (

            <Card title="Tasks by Status">

                <div className="flex h-80 items-center justify-center">

                    <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />

                </div>

            </Card>

        );

    }

    if (!statusChart.length) {

        return (

            <Card title="Tasks by Status">

                <div className="flex h-80 items-center justify-center text-gray-500">

                    No task data available

                </div>

            </Card>

        );

    }

    return (

        <Card title="Tasks by Status">

            <div className="h-80">

                <ResponsiveContainer>

                    <PieChart>

                        <Pie

                            data={statusChart}

                            dataKey="count"

                            nameKey="status"

                            cx="50%"

                            cy="50%"

                            outerRadius={100}

                            label

                        >

                            {

                                statusChart.map((entry, index) => (

                                    <Cell

                                        key={entry.status}

                                        fill={

                                            COLORS[

                                                index %

                                                COLORS.length

                                            ]

                                        }

                                    />

                                ))

                            }

                        </Pie>

                        <Tooltip />

                        <Legend />

                    </PieChart>

                </ResponsiveContainer>

            </div>

        </Card>

    );

}