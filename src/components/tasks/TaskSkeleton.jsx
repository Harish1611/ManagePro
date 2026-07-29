export default function TaskSkeleton() {

    return (

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

            {

                Array.from({ length: 6 }).map((_, index) => (

                    <div

                        key={index}

                        className="animate-pulse rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900"

                    >

                        <div className="mb-5 flex items-start justify-between">

                            <div className="flex gap-3">

                                <div className="h-4 w-4 rounded-full bg-gray-300 dark:bg-gray-700" />

                                <div>

                                    <div className="h-5 w-40 rounded bg-gray-300 dark:bg-gray-700" />

                                    <div className="mt-3 h-4 w-56 rounded bg-gray-200 dark:bg-gray-800" />

                                    <div className="mt-2 h-4 w-44 rounded bg-gray-200 dark:bg-gray-800" />

                                </div>

                            </div>

                            <div className="h-8 w-8 rounded bg-gray-300 dark:bg-gray-700" />

                        </div>

                        <div className="space-y-3">

                            <div className="h-4 w-36 rounded bg-gray-200 dark:bg-gray-800" />

                            <div className="h-4 w-32 rounded bg-gray-200 dark:bg-gray-800" />

                            <div className="h-4 w-28 rounded bg-gray-200 dark:bg-gray-800" />

                        </div>

                        <div className="mt-6 flex justify-between">

                            <div className="h-7 w-20 rounded-full bg-gray-300 dark:bg-gray-700" />

                            <div className="h-7 w-24 rounded-full bg-gray-300 dark:bg-gray-700" />

                        </div>

                    </div>

                ))

            }

        </div>

    );

}