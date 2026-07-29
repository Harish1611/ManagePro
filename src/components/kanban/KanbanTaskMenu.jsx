import { useEffect, useRef, useState } from "react";

import {
    FiMoreVertical,
    FiEdit2,
    FiTrash2,
    FiEye,
} from "react-icons/fi";

export default function KanbanTaskMenu({

    onView,

    onEdit,

    onDelete,

}) {

    const [open, setOpen] = useState(false);

    const menuRef = useRef(null);

    useEffect(() => {

        const handleClickOutside = (event) => {

            if (

                menuRef.current &&
                !menuRef.current.contains(event.target)

            ) {

                setOpen(false);

            }

        };

        document.addEventListener(

            "mousedown",

            handleClickOutside

        );

        return () => {

            document.removeEventListener(

                "mousedown",

                handleClickOutside

            );

        };

    }, []);

    const handleView = (e) => {

        e.stopPropagation();

        onView?.();

        setOpen(false);

    };

    const handleEdit = (e) => {

        e.stopPropagation();

        onEdit?.();

        setOpen(false);

    };

    const handleDelete = (e) => {

        e.stopPropagation();

        onDelete?.();

        setOpen(false);

    };

    return (

        <div

            ref={menuRef}

            className="relative"

            onClick={(e) => e.stopPropagation()}

        >

            <button

                type="button"

                onPointerDown={(e) => e.stopPropagation()}

                onClick={(e) => {

                    e.stopPropagation();

                    setOpen((prev) => !prev);

                }}

                className="rounded p-1 transition hover:bg-gray-100"

            >

                <FiMoreVertical size={18} />

            </button>

            {

                open && (

                    <div className="absolute right-0 top-8 z-50 w-44 overflow-hidden rounded-lg border bg-white shadow-xl">

                        {/* <button

                            type="button"

                            onPointerDown={(e) => e.stopPropagation()}

                            onClick={handleView}

                            className="flex w-full items-center gap-2 px-4 py-2 text-left hover:bg-gray-100"

                        >

                            <FiEye />

                            View

                        </button> */}

                        <button

                            type="button"

                            onPointerDown={(e) => e.stopPropagation()}

                            onClick={handleEdit}

                            className="flex w-full items-center gap-2 px-4 py-2 text-left hover:bg-gray-100"

                        >

                            <FiEdit2 />

                            Edit

                        </button>

                        <button

                            type="button"

                            onPointerDown={(e) => e.stopPropagation()}

                            onClick={handleDelete}

                            className="flex w-full items-center gap-2 px-4 py-2 text-left text-red-600 hover:bg-red-50"

                        >

                            <FiTrash2 />

                            Delete

                        </button>

                    </div>

                )

            }

        </div>

    );

}