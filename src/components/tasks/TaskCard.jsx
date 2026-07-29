
import {

    CalendarDays,

    FolderOpen,

    User,

} from "lucide-react";

import TaskPriorityBadge from "./TaskPriorityBadge";
import TaskStatusBadge from "./TaskStatusBadge";
import TaskMenu from "./TaskMenu";

export default function TaskCard({

    task,

    onEdit,

    onDelete,

}) {

    return (

        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">

            {/* Header */}

            <div className="flex items-start justify-between">

                <div className="flex items-center gap-3">

                    <div

                        className="h-4 w-4 rounded-full"

                        style={{
                            backgroundColor:
                                task.project?.color ||
                                "#3B82F6",
                        }}

                    />

                    <div>

                        <h3 className="font-semibold">

                            {task.title}

                        </h3>

                        <p className="mt-1 text-sm text-gray-500">

                            {task.description?.slice(0, 70)}

                        </p>

                    </div>

                </div>

                <TaskMenu

                    task={task}

                    onEdit={onEdit}

                    onDelete={onDelete}

                />

            </div>

            {/* Project */}

            <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">

                <FolderOpen size={16} />

                {task.project?.name}

            </div>

            {/* Assigned */}

            <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">

                <User size={16} />

                {

                    task.assignedTo

                        ? task.assignedTo.name

                        : "Unassigned"

                }

            </div>

            {/* Due Date */}

            <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">

                <CalendarDays size={16} />

                {

                    task.dueDate

                        ? new Date(
                            task.dueDate
                        ).toLocaleDateString()

                        : "No Due Date"

                }

            </div>

            {/* Footer */}

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">

                <TaskPriorityBadge

                    priority={task.priority}

                />

                <TaskStatusBadge

                    status={task.status}

                />

            </div>

        </div>

    );

}