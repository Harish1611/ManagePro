
const statusClasses = {

    Todo: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",

    "In Progress":
        "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",

    Done:
        "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",

};

export default function TaskStatusBadge({ status }) {

    return (

        <span
            className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusClasses[status] || statusClasses.Todo}`}
        >

            {status}

        </span>

    );

}