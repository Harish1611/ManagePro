export default function WorkloadStats({

    workload = {},

}) {


    const stats = [

        {

            label: "Total Tasks",

            value: workload.totalTasks || 0,

        },

        {

            label: "Completed",

            value: workload.completed || 0,

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

            label: "Todo",

            value: workload.todo || 0,

        },

        {

            label: "Overdue",

            value: workload.overdue || 0,

        },

    ];


    return (

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">

            {

                stats.map((item) => (

                    <div

                        key={item.label}

                        className="
                            rounded-xl
                            border
                            bg-white
                            p-4
                            shadow-sm
                            dark:border-gray-700
                            dark:bg-gray-900
                        "

                    >

                        <p className="text-sm text-gray-500 dark:text-gray-400">

                            {item.label}

                        </p>


                        <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">

                            {item.value}

                        </p>


                    </div>

                ))

            }

        </div>

    );

}