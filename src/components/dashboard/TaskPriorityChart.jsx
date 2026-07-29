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

    Cell,

} from "recharts";

const COLORS = {

    Low: "#10B981",

    Medium: "#F59E0B",

    High: "#EF4444",

    Critical: "#7C3AED",

};

export default function TaskPriorityChart() {

    const {

        priorityChart,

        loading,

    } = useDashboard();

    if (loading) {

        return (

            <Card title="Tasks by Priority">

                <div className="flex h-80 items-center justify-center">

                    <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />

                </div>

            </Card>

        );

    }

    if (!priorityChart.length) {

        return (

            <Card title="Tasks by Priority">

                <div className="flex h-80 items-center justify-center text-gray-500">

                    No task data available

                </div>

            </Card>

        );

    }

    return (

        <Card title="Tasks by Priority">

            <div className="h-80">

                <ResponsiveContainer>

                    <BarChart

                        data={priorityChart}

                        margin={{

                            top: 20,

                            right: 20,

                            left: 0,

                            bottom: 5,

                        }}

                    >

                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="priority" />

                        <YAxis allowDecimals={false} />

                        <Tooltip />

                        <Bar

                            dataKey="count"

                            radius={[6, 6, 0, 0]}

                        >

                            {

                                priorityChart.map((item) => (

                                    <Cell

                                        key={item.priority}

                                        fill={

                                            COLORS[item.priority] ||

                                            "#3B82F6"

                                        }

                                    />

                                ))

                            }

                        </Bar>

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </Card>

    );

}