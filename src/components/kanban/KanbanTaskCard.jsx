import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useNavigate } from "react-router-dom";

import { GripVertical, CalendarDays } from "lucide-react";

import TaskPriorityBadge from "@/components/tasks/TaskPriorityBadge";
import KanbanTaskMenu from "./KanbanTaskMenu";

export default function KanbanTaskCard({

    task,

    onEdit,

    onDelete,

}) {

    const navigate = useNavigate();

    const {

        attributes,

        listeners,

        setNodeRef,

        transform,

        transition,

        isDragging,

    } = useSortable({

        id: task._id,

        data: {

            task,

        },

    });

    const style = {

        transform: CSS.Transform.toString(transform),

        transition,

        opacity: isDragging ? 0.6 : 1,

        zIndex: isDragging ? 1000 : "auto",

    };

    return (

        <div

            ref={setNodeRef}

            style={style}

            className={`

                rounded-xl
                border
                bg-white
                p-4
                shadow-sm
                transition-all
                hover:shadow-md

                ${

                    isDragging

                        ? "rotate-1 scale-[1.02] shadow-2xl"

                        : ""

                }

            `}

        >

            {/* Header */}

            <div className="mb-3 flex items-start justify-between gap-3">

                <div className="min-w-0 flex-1">

                    <div className="mb-2 flex items-center gap-2">

                        <span

                            className="h-3 w-3 rounded-full"

                            style={{

                                background:

                                    task.project?.color ||

                                    "#3B82F6",

                            }}

                        />

                        <span className="truncate text-xs font-semibold text-gray-600">

                            {task.project?.name || "No Project"}

                        </span>

                    </div>

                </div>

                <div className="flex items-center gap-1">

                    {/* Drag Handle */}

                    <div

                        {...attributes}

                        {...listeners}

                        className="cursor-grab rounded p-1 text-gray-400 hover:bg-gray-100 active:cursor-grabbing"

                        title="Drag Task"

                    >

                        <GripVertical size={16} />

                    </div>

                    {/* Menu */}

                    <KanbanTaskMenu

                        onView={() =>

                            navigate(`/tasks/${task._id}`)

                        }

                        onEdit={() =>

                            onEdit?.(task)

                        }

                        onDelete={() =>

                            onDelete?.(task)

                        }

                    />

                </div>

            </div>

            {/* Title */}

            <h3 className="line-clamp-2 text-sm font-semibold">

                {task.title}

            </h3>

            {/* Description */}

            <p className="mt-2 line-clamp-2 text-xs text-gray-500">

                {

                    task.description ||

                    "No description"

                }

            </p>

            {/* Priority & Due Date */}

            <div className="mt-4 flex items-center justify-between">

                <TaskPriorityBadge

                    priority={task.priority}

                />

                {

                    task.dueDate && (

                        <div className="flex items-center gap-1 rounded-full bg-gray-100 px-2 py-1 text-xs">

                            <CalendarDays size={13} />

                            {

                                new Date(

                                    task.dueDate

                                ).toLocaleDateString(

                                    "en-IN",

                                    {

                                        day: "numeric",

                                        month: "short",

                                    }

                                )

                            }

                        </div>

                    )

                }

            </div>

            {/* Footer */}

            <div className="mt-4 flex items-center justify-between">

                <div className="flex items-center gap-2">

                    {

                        task.assignedTo?.avatar

                            ? (

                                <img

                                    src={

                                        task.assignedTo.avatar

                                    }

                                    alt={

                                        task.assignedTo.name

                                    }

                                    className="h-8 w-8 rounded-full object-cover"

                                />

                            )

                            : (

                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">

                                    {

                                        task.assignedTo?.name

                                            ?.charAt(0)

                                            ?.toUpperCase()

                                            || "?"

                                    }

                                </div>

                            )

                    }

                    <span className="truncate text-xs text-gray-600">

                        {

                            task.assignedTo?.name ||

                            "Unassigned"

                        }

                    </span>

                </div>

            </div>

        </div>

    );

}