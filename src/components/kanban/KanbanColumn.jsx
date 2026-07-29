import { useDroppable } from "@dnd-kit/core";

import EmptyColumn from "./EmptyColumn";
import KanbanTaskCard from "./KanbanTaskCard";

export default function KanbanColumn({
    status,
    tasks = [],
    onEdit,
    onDelete,
}){

    const {

        setNodeRef,

        isOver,

    } = useDroppable({

        id: status,

    });

    return (

        <div

            ref={setNodeRef}

            className={`

                rounded-xl

                border-2

                p-4

                transition-colors

                min-h-[550px]

                ${

                    isOver

                        ? "border-blue-500 bg-blue-50"

                        : "border-transparent bg-gray-100"

                }

            `}

        >

            <div className="mb-4 flex items-center justify-between">

                <h3 className="font-semibold">

                    {status}

                </h3>

                <span className="rounded-full bg-white px-3 py-1 text-sm font-medium">

                    {tasks.length}

                </span>

            </div>

            <div className="space-y-4">

                {

                    tasks.length > 0

                        ? tasks.map(task => (

    <KanbanTaskCard

        key={task._id}

        task={task}

        onEdit={onEdit}

        onDelete={onDelete}

    />

))

                        : <EmptyColumn />

                }

            </div>

        </div>

    );

}