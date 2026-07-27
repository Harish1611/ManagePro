import {

    FiEdit,

    FiMoreVertical,

    FiTrash2,

} from "react-icons/fi";

import { useState } from "react";

export default function ProjectMenu({

    project,

    onEdit,

    onDelete,

}) {

    const [open, setOpen] = useState(false);

    return (

        <div

            className="relative"

            onClick={(e) => e.stopPropagation()}

        >

            <button

                onClick={() => setOpen(!open)}

                className="rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800"

            >

                <FiMoreVertical />

            </button>

            {open && (

                <div className="absolute right-0 top-10 z-50 w-44 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-900">

                    <button

                        onClick={() => {

                            setOpen(false);

                            onEdit?.(project);

                        }}

                        className="flex w-full items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800"

                    >

                        <FiEdit />

                        Edit Project

                    </button>

                    <button

                        onClick={() => {

                            setOpen(false);

                            onDelete?.(project);

                        }}

                        className="flex w-full items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10"

                    >

                        <FiTrash2 />

                        Delete Project

                    </button>

                </div>

            )}

        </div>

    );

}