import Card from "@/components/ui/Card";

const tasks = [

    "Design Login",

    "Fix API",

    "Deploy",

    "Testing"

];

export default function RecentTasks() {

    return (

        <Card title="Recent Tasks">

            <ul className="space-y-3">

                {tasks.map(task => (

                    <li
                        key={task}
                        className="border-b pb-2"
                    >

                        {task}

                    </li>

                ))}

            </ul>

        </Card>

    );

}