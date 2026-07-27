const STATUS_COLORS = {

    Planning:
        "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300",

    Active:
        "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300",

    Completed:
        "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",

    Archived:
        "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300",

};

export default function ProjectStatusBadge({

    status,

}) {

    return (

        <span

            className={`mt-1 inline-flex rounded-full px-3 py-1 text-xs font-medium ${STATUS_COLORS[status]}`}

        >

            {status}

        </span>

    );

}