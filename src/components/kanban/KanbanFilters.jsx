import { RotateCcw, Search } from "lucide-react";

import { TASK_PRIORITY } from "@/constants/taskConstants";

export default function KanbanFilters({

    filters = {

        search: "",

        project: "",

        assignedTo: "",

        priority: "",

    },

    setFilters = () => { },

    projects = [],

    members = [],

}) {

    const handleChange = (key, value) => {

        setFilters((prev) => ({

            ...prev,

            [key]: value,

        }));

    };

    const handleReset = () => {

        setFilters({

            search: "",

            project: "",

            assignedTo: "",

            priority: "",

        });

    };

    return (

        <div className="rounded-xl border bg-white p-4 shadow-sm">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                {/* Search */}

                <div className="relative">

                    <Search
                        size={18}
                        className="absolute left-3 top-3 text-gray-400"
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

                        className="w-full rounded-lg border py-2 pl-10 pr-3"

                    />

                </div>

                {/* Project */}

                <select

                    value={filters.project}

                    onChange={(e) =>

                        handleChange(

                            "project",

                            e.target.value

                        )

                    }

                    className="rounded-lg border px-3 py-2"

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

                {/* Assignee */}

                <select

                    value={filters.assignedTo}

                    onChange={(e) =>

                        handleChange(

                            "assignedTo",

                            e.target.value

                        )

                    }

                    className="rounded-lg border px-3 py-2"

                >

                    <option value="">

                        All Members

                    </option>

                    {

                        members.map((member) => (

                            <option

                                key={member._id}

                                value={member._id}

                            >

                                {member.name}

                            </option>

                        ))

                    }

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

                    className="rounded-lg border px-3 py-2"

                >

                    <option value="">

                        All Priorities

                    </option>

                    {

                        TASK_PRIORITY.map((priority) => (

                            <option

                                key={priority}

                                value={priority}

                            >

                                {priority}

                            </option>

                        ))

                    }

                </select>

                {/* Reset */}

                <button

                    type="button"

                    onClick={handleReset}

                    className="flex items-center justify-center gap-2 rounded-lg border px-4 py-2 hover:bg-gray-50"

                >

                    <RotateCcw size={16} />

                    Reset

                </button>

            </div>

        </div>

    );

}