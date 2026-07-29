import TaskSearch from "./TaskSearch";

export default function TaskFilters({

    filters,

    setFilters,

    projects = [],

    users = [],

}) {

    return (

        <div className="flex flex-col gap-4 lg:flex-row lg:flex-wrap">

            <TaskSearch

                value={filters.search}

                onChange={(e) =>

                    setFilters({

                        ...filters,

                        search: e.target.value,

                    })

                }

            />

            {/* Project */}

            <select

                value={filters.project}

                onChange={(e) =>

                    setFilters({

                        ...filters,

                        project: e.target.value,

                        page: 1,

                    })

                }

                className="rounded-lg border px-3 py-2 dark:border-gray-700 dark:bg-gray-900"

            >

                <option value="">

                    All Projects

                </option>

                {

                    projects.map((project) => (

                        <option

                            key={project._id}

                            value={project._id}

                        >

                            {project.name}

                        </option>

                    ))

                }

            </select>

            {/* Status */}

            <select

                value={filters.status}

                onChange={(e) =>

                    setFilters({

                        ...filters,

                        status: e.target.value,

                        page: 1,

                    })

                }

                className="rounded-lg border px-3 py-2 dark:border-gray-700 dark:bg-gray-900"

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

                    setFilters({

                        ...filters,

                        priority: e.target.value,

                        page: 1,

                    })

                }

                className="rounded-lg border px-3 py-2 dark:border-gray-700 dark:bg-gray-900"

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

            {/* Assigned */}

            <select

                value={filters.assignedTo}

                onChange={(e) =>

                    setFilters({

                        ...filters,

                        assignedTo: e.target.value,

                        page: 1,

                    })

                }

                className="rounded-lg border px-3 py-2 dark:border-gray-700 dark:bg-gray-900"

            >

                <option value="">

                    All Members

                </option>

                {

                    users.map((user) => (

                        <option

                            key={user._id}

                            value={user._id}

                        >

                            {user.name}

                        </option>

                    ))

                }

            </select>

            {/* Sort */}

            <select

                value={filters.sort}

                onChange={(e) =>

                    setFilters({

                        ...filters,

                        sort: e.target.value,

                        page: 1,

                    })

                }

                className="rounded-lg border px-3 py-2 dark:border-gray-700 dark:bg-gray-900"

            >

                <option value="-createdAt">

                    Newest

                </option>

                <option value="createdAt">

                    Oldest

                </option>

                <option value="title">

                    Title A-Z

                </option>

                <option value="-title">

                    Title Z-A

                </option>

                <option value="dueDate">

                    Due Date ↑

                </option>

                <option value="-dueDate">

                    Due Date ↓

                </option>

            </select>

        </div>

    );

}