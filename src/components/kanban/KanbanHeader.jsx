import KanbanFilters from "./KanbanFilters";

export default function KanbanHeader({

    filters,

    setFilters,

    projects,

    members,

    onCreateTask,

}) {

    return (

        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start">

            {/* Filters */}

            <div className="flex-1">

                <KanbanFilters

                    filters={filters}

                    setFilters={setFilters}

                    projects={projects}

                    members={members}

                />

            </div>

            {/* Create Button */}

            <div className="flex shrink-0 lg:justify-end">

                <button

                    type="button"

                    onClick={onCreateTask}

                    className="h-11 whitespace-nowrap rounded-lg bg-blue-600 px-6 font-medium text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-400 dark:focus:ring-offset-gray-900"

                >

                    + New Task

                </button>

            </div>

        </div>

    );

}