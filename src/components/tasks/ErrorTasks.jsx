import {

    AlertTriangle,

    RefreshCcw,

} from "lucide-react";

export default function ErrorTasks({

    message,

    retry,

}) {

    return (

        <div className="rounded-xl border border-red-200 bg-red-50 p-10 text-center dark:border-red-900 dark:bg-red-950/20">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">

                <AlertTriangle

                    size={40}

                    className="text-red-600"

                />

            </div>

            <h2 className="mt-5 text-2xl font-semibold text-red-700 dark:text-red-400">

                Something went wrong

            </h2>

            <p className="mx-auto mt-3 max-w-lg text-gray-600 dark:text-gray-400">

                {message || "Unable to load tasks. Please try again."}

            </p>

            <button

                onClick={retry}

                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-white transition hover:bg-red-700"

            >

                <RefreshCcw size={18} />

                Try Again

            </button>

        </div>

    );

}