import Card from "@/components/ui/Card";

export default function QuickActions() {

    return (

        <Card title="Quick Actions">

            <div className="flex flex-wrap gap-3">

                <button className="rounded-lg bg-blue-600 px-4 py-2 text-white">

                    New Project

                </button>

                <button className="rounded-lg bg-green-600 px-4 py-2 text-white">

                    New Task

                </button>

                <button className="rounded-lg bg-purple-600 px-4 py-2 text-white">

                    Invite Member

                </button>

            </div>

        </Card>

    );

}