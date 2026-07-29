import {

    Grid2X2,

    List,

    Search,

} from "lucide-react";

export default function TaskToolbar({

    filters,

    setFilters,

    view,

    setView,

    projects = [],

    users = [],

}) {

    const handleChange = (key, value) => {

        setFilters((prev) => ({

            ...prev,

            page: 1,

            [key]: value,

        }));

    };

    return (

        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900">

            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                {/* Search */}

                <div className="relative w-full lg:max-w-sm">

                    <Search

                        size={18}

                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"

                    />

                    <input

                        type="text"

                        placeholder="Search tasks..."

                        value={filters.search}

                        onChange={(e) =>

                            handleChange(

                                "search",

                                e.target.value

                            )

                        }

                        className="w-full rounded-lg border border-gray-300 bg-transparent py-2 pl-10 pr-3 outline-none focus:border-blue-500 dark:border-gray-700"

                    />

                </div>

                {/* Filters */}

                <div className="flex flex-wrap items-center gap-3">

                    {/* Project */}

                    <select

                        value={filters.project}

                        onChange={(e) =>

                            handleChange(

                                "project",

                                e.target.value

                            )

                        }

                        className="rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-700"

                    >

                        <option value="">

                            All Projects

                        </option>

                        {projects.map((project) => (

                            <option

                                key={project._id}

                                value={project._id}

                            >

                                {project.name}

                            </option>

                        ))}

                    </select>

                    {/* Status */}

                    <select

                        value={filters.status}

                        onChange={(e) =>

                            handleChange(

                                "status",

                                e.target.value

                            )

                        }

                        className="rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-700"

                    >

                        <option value="">

                            All Status

                        </option>

                        <option value="Todo">

                            Todo

                        </option>

                        <option value="In Progress">

                            In Progress

                        </option>

                        <option value="Review">

                            Review

                        </option>

                        <option value="Done">

                            Done

                        </option>

                    </select>

                    {/* Priority */}

                    <select

                        value={filters.priority}

                        onChange={(e) =>

                            handleChange(

                                "priority",

                                e.target.value

                            )

                        }

                        className="rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-700"

                    >

                        <option value="">

                            All Priority

                        </option>

                        <option value="Low">

                            Low

                        </option>

                        <option value="Medium">

                            Medium

                        </option>

                        <option value="High">

                            High

                        </option>

                         <option value="Critical">

                            Critical

                        </option>

                    </select>

                    {/* Assignee */}

                    <select

                        value={filters.assignedTo}

                        onChange={(e) =>

                            handleChange(

                                "assignedTo",

                                e.target.value

                            )

                        }

                        className="rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-700"

                    >

                        <option value="">

                            All Members

                        </option>

                        {users.map((user) => (

                            <option

                                key={user._id}

                                value={user._id}

                            >

                                {user.name}

                            </option>

                        ))}

                    </select>

                    {/* Sort */}

                    <select

                        value={filters.sort}

                        onChange={(e) =>

                            handleChange(

                                "sort",

                                e.target.value

                            )

                        }

                        className="rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-700"

                    >

                        <option value="-createdAt">

                            Newest

                        </option>

                        <option value="createdAt">

                            Oldest

                        </option>

                        <option value="dueDate">

                            Due Date ↑

                        </option>

                        <option value="-dueDate">

                            Due Date ↓

                        </option>

                        <option value="priority">

                            Priority ↑

                        </option>

                        <option value="-priority">

                            Priority ↓

                        </option>

                    </select>

                    {/* View Toggle */}

                    <div className="flex overflow-hidden rounded-lg border border-gray-300 dark:border-gray-700">

                        <button

                            onClick={() =>

                                setView("grid")

                            }

                            className={`p-2 transition ${
                                view === "grid"

                                    ? "bg-blue-600 text-white"

                                    : ""
                            }`}

                        >

                            <Grid2X2 size={18} />

                        </button>

                        <button

                            onClick={() =>

                                setView("table")

                            }

                            className={`p-2 transition ${
                                view === "table"

                                    ? "bg-blue-600 text-white"

                                    : ""
                            }`}

                        >

                            <List size={18} />

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}