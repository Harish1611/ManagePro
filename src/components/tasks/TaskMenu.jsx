
import { useState } from "react";
import { MoreVertical, Pencil, Trash2 } from "lucide-react";

export default function TaskMenu({

    task,

    onEdit,

    onDelete,

}) {

    const [open, setOpen] = useState(false);

    return (

        <div className="relative">

            <button

                onClick={() => setOpen(!open)}

                className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800"

            >

                <MoreVertical size={18} />

            </button>

            {

                open && (

                    <div className="absolute right-0 z-20 mt-2 w-44 rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-900">

                        <button

                            onClick={() => {

                                onEdit(task);

                                setOpen(false);

                            }}

                            className="flex w-full items-center gap-2 px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-800"

                        >

                            <Pencil size={16} />

                            Edit

                        </button>

                        <button

                            onClick={() => {

                                onDelete(task);

                                setOpen(false);

                            }}

                            className="flex w-full items-center gap-2 px-4 py-3 text-left text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"

                        >

                            <Trash2 size={16} />

                            Delete

                        </button>

                    </div>

                )

            }

        </div>

    );

}