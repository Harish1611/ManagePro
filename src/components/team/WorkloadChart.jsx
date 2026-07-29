export default function WorkloadChart({

    workload = {},

}) {


    const data = [

        {

            label: "Todo",

            value: workload.todo || 0,

        },

        {

            label: "In Progress",

            value: workload.inProgress || 0,

        },

        {

            label: "Review",

            value: workload.review || 0,

        },

        {

            label: "Completed",

            value: workload.completed || 0,

        },

    ];


    const total = workload.totalTasks || 1;


    return (

        <div

            className="
                rounded-xl
                border
                bg-white
                p-6
                shadow-sm
                dark:border-gray-700
                dark:bg-gray-900
            "

        >

            <h3 className="mb-5 text-lg font-semibold text-gray-900 dark:text-white">

                Task Status Distribution

            </h3>


            <div className="space-y-5">

                {

                    data.map((item) => (

                        <div key={item.label}>


                            <div className="mb-2 flex justify-between text-sm">

                                <span className="text-gray-600 dark:text-gray-300">

                                    {item.label}

                                </span>


                                <span className="font-medium text-gray-900 dark:text-white">

                                    {item.value}

                                </span>


                            </div>


                            <div

                                className="
                                    h-3
                                    overflow-hidden
                                    rounded-full
                                    bg-gray-200
                                    dark:bg-gray-700
                                "

                            >

                                <div

                                    className="
                                        h-full
                                        rounded-full
                                        bg-blue-600
                                    "

                                    style={{

                                        width:

                                            `${

                                                (item.value / total) * 100

                                            }%`

                                    }}

                                />

                            </div>


                        </div>

                    ))

                }

            </div>


        </div>

    );

}