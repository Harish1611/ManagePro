import { ClipboardList, Plus } from "lucide-react";

export default function EmptyTasks({

    onCreate,

}) {

    return (

        <div className="rounded-xl border border-dashed border-gray-300 bg-white py-20 text-center dark:border-gray-700 dark:bg-gray-900">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/20">

                <ClipboardList

                    size={38}

                    className="text-blue-600"

                />

            </div>

            <h2 className="mt-6 text-2xl font-semibold">

                No Tasks Found

            </h2>

            <p className="mx-auto mt-3 max-w-md text-gray-500">

                Start organizing your work by creating your first task.
                Assign members, priorities and due dates to keep your team productive.

            </p>

            <button

                onClick={onCreate}

                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"

            >

                <Plus size={18} />

                Create Task

            </button>

        </div>

    );

}