const statusClasses = {

    Todo:
        "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",

    "In Progress":
        "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",

    Review:
        "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",

    Done:
        "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",

    Blocked:
        "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",

};

export default function TaskStatusBadge({

    status = "Todo",

}) {

    return (

        <span
            className={`
                inline-flex
                items-center
                rounded-full
                px-3
                py-1
                text-xs
                font-semibold
                ${
                    statusClasses[status] ||
                    "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                }
            `}
        >

            {status}

        </span>

    );

}