import { Plus } from "lucide-react";

export default function TaskHeader({

    onCreate,

}) {

    return (

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div>

                <h1 className="text-3xl font-bold">

                    Tasks

                </h1>

                <p className="mt-1 text-gray-500 dark:text-gray-400">

                    Create, assign and track your team's work.

                </p>

            </div>

            <button

                onClick={onCreate}

                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"

            >

                <Plus size={18} />

                New Task

            </button>

        </div>

    );

}