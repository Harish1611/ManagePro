import {

    ChevronLeft,

    ChevronRight,

} from "lucide-react";

export default function TaskPagination({

    pagination,

    filters,

    setFilters,

}) {

    const {

        page,

        totalPages,

    } = pagination;

    const changePage = (newPage) => {

        if (

            newPage < 1 ||

            newPage > totalPages

        ) {

            return;

        }

        setFilters({

            ...filters,

            page: newPage,

        });

    };

    return (

        <div className="flex flex-col gap-4 border-t border-gray-200 px-6 py-4 sm:flex-row sm:items-center sm:justify-between dark:border-gray-800">

            <p className="text-sm text-gray-500">

                Page <strong>{page}</strong> of{" "}

                <strong>{totalPages || 1}</strong>

            </p>

            <div className="flex items-center gap-2">

                <button

                    onClick={() =>

                        changePage(page - 1)

                    }

                    disabled={page === 1}

                    className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-700 dark:hover:bg-gray-800"

                >

                    <ChevronLeft size={16} />

                    Previous

                </button>

                <button

                    onClick={() =>

                        changePage(page + 1)

                    }

                    disabled={

                        page === totalPages ||

                        totalPages === 0

                    }

                    className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-700 dark:hover:bg-gray-800"

                >

                    Next

                    <ChevronRight size={16} />

                </button>

            </div>

        </div>

    );

}