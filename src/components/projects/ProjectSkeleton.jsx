export default function ProjectSkeleton({

    count = 6,

}) {

    return (

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

            {
                Array.from({
                    length: count
                }).map((_, index) => (

                    <div

                        key={index}

                        className="
                        animate-pulse
                        rounded-xl
                        border
                        border-gray-200
                        bg-white
                        p-5
                        shadow-sm
                        dark:border-gray-800
                        dark:bg-gray-900
                        "

                    >

                        {/* Header */}

                        <div className="flex justify-between">

                            <div className="flex gap-3">

                                <div className="h-4 w-4 rounded-full bg-gray-300 dark:bg-gray-700" />

                                <div className="h-5 w-32 rounded bg-gray-300 dark:bg-gray-700" />

                            </div>


                            <div className="h-6 w-6 rounded bg-gray-300 dark:bg-gray-700" />


                        </div>


                        {/* Status */}

                        <div className="mt-5 h-6 w-24 rounded-full bg-gray-300 dark:bg-gray-700" />


                        {/* Description */}

                        <div className="mt-5 space-y-2">

                            <div className="h-3 rounded bg-gray-300 dark:bg-gray-700" />

                            <div className="h-3 rounded bg-gray-300 dark:bg-gray-700" />

                            <div className="h-3 w-2/3 rounded bg-gray-300 dark:bg-gray-700" />

                        </div>


                        {/* Members */}

                        <div className="mt-6 flex justify-between">

                            <div className="h-4 w-20 rounded bg-gray-300 dark:bg-gray-700" />


                            <div className="flex -space-x-2">

                                <div className="h-8 w-8 rounded-full bg-gray-300 dark:bg-gray-700" />

                                <div className="h-8 w-8 rounded-full bg-gray-300 dark:bg-gray-700" />

                            </div>

                        </div>


                    </div>

                ))
            }

        </div>

    );

}