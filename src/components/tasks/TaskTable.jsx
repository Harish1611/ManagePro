import {

    ArrowDownAZ,

    CalendarDays,

} from "lucide-react";

import TaskPriorityBadge from "./TaskPriorityBadge";
import TaskStatusBadge from "./TaskStatusBadge";
import TaskMenu from "./TaskMenu";
import TaskPagination from "./TaskPagination";

export default function TaskTable({

    tasks,

    pagination,

    filters,

    setFilters,

    onEdit,

    onDelete,

}) {

    const handleSort = (field) => {

        const current = filters.sort || "-createdAt";

        let nextSort = field;

        if (current === field) {

            nextSort = `-${field}`;

        } else if (current === `-${field}`) {

            nextSort = field;

        }

        setFilters({

            ...filters,

            sort: nextSort,

            page: 1,

        });

    };

    const SortButton = ({

        label,

        field,

    }) => (

        <button

            onClick={() =>

                handleSort(field)

            }

            className="inline-flex items-center gap-1 font-medium hover:text-blue-600"

        >

            {label}

            <ArrowDownAZ size={14} />

        </button>

    );

    return (

        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow dark:border-gray-800 dark:bg-gray-900">

            {/* Horizontal scroll */}

            <div className="overflow-x-auto">

                <table className="min-w-[1000px] w-full">

                    <thead className="bg-gray-100 dark:bg-gray-800">

                        <tr>

                            <th className="px-6 py-4 text-left">

                                <SortButton

                                    label="Task"

                                    field="title"

                                />

                            </th>

                            <th className="px-6 py-4 text-left">

                                Project

                            </th>

                            <th className="px-6 py-4 text-left">

                                Priority

                            </th>

                            <th className="px-6 py-4 text-left">

                                Status

                            </th>

                            <th className="px-6 py-4 text-left">

                                Assigned

                            </th>

                            <th className="px-6 py-4 text-left">

                                <SortButton

                                    label="Due Date"

                                    field="dueDate"

                                />

                            </th>

                            <th className="px-6 py-4 text-right">

                                Actions

                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {tasks.map((task) => (

                            <tr

                                key={task._id}

                                className="border-t border-gray-200 transition hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800"

                            >

                                {/* Task */}

                                <td className="px-6 py-4">

                                    <div className="flex items-start gap-3">

                                        <div

                                            className="mt-1 h-4 w-4 rounded-full"

                                            style={{

                                                backgroundColor:

                                                    task.project?.color ||

                                                    "#3B82F6",

                                            }}

                                        />

                                        <div>

                                            <p className="font-medium">

                                                {task.title}

                                            </p>

                                            <p className="mt-1 max-w-xs truncate text-sm text-gray-500">

                                                {

                                                    task.description ||

                                                    "-"

                                                }

                                            </p>

                                        </div>

                                    </div>

                                </td>

                                {/* Project */}

                                <td className="px-6 py-4">

                                    {

                                        task.project?.name ||

                                        "-"

                                    }

                                </td>

                                {/* Priority */}

                                <td className="px-6 py-4">

                                    <TaskPriorityBadge

                                        priority={task.priority}

                                    />

                                </td>

                                {/* Status */}

                                <td className="px-6 py-4">

                                    <TaskStatusBadge

                                        status={task.status}

                                    />

                                </td>

                                {/* Assigned */}

                                <td className="px-6 py-4">

                                    {

                                        task.assignedTo?.name ||

                                        "Unassigned"

                                    }

                                </td>

                                {/* Due */}

                                <td className="px-6 py-4">

                                    <div className="flex items-center gap-2">

                                        <CalendarDays size={16} />

                                        {

                                            task.dueDate

                                                ? new Date(

                                                    task.dueDate

                                                ).toLocaleDateString()

                                                : "-"

                                        }

                                    </div>

                                </td>

                                {/* Actions */}

                                <td className="px-6 py-4 text-right">

                                    <TaskMenu

                                        task={task}

                                        onEdit={onEdit}

                                        onDelete={onDelete}

                                    />

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

            <TaskPagination

                pagination={pagination}

                filters={filters}

                setFilters={setFilters}

            />

        </div>

    );

}