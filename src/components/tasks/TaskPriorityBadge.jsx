
const priorityClasses = {
    Low: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
    Medium: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
    High: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
    Critical: "bg-red-200 text-red-700 dark:bg-red-900/20 dark:text-red-300",

};

export default function TaskPriorityBadge({ priority }) {

    return (

        <span
            className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${priorityClasses[priority] || priorityClasses.Low}`}
        >

            {priority}

        </span>

    );

}