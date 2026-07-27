export default function ProjectPagination({

    pagination,

    filters,

    setFilters,

}) {

    const {

        page = 1,

        totalPages = 1,

    } = pagination;


    const changePage = (newPage) => {

        if (
            newPage < 1 ||
            newPage > totalPages
        ) {
            return;
        }


        setFilters((prev) => ({

            ...prev,

            page: newPage,

        }));

    };


    return (

        <div className="flex items-center justify-between border-t border-gray-200 px-6 py-4 dark:border-gray-800">


            <button

                disabled={page === 1}

                onClick={() => changePage(page - 1)}

                className="rounded-lg border px-4 py-2 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 dark:hover:bg-gray-800"

            >

                Previous

            </button>


            <span className="text-sm text-gray-600 dark:text-gray-400">

                Page {page} of {totalPages}

            </span>


            <button

                disabled={page === totalPages}

                onClick={() => changePage(page + 1)}

                className="rounded-lg border px-4 py-2 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 dark:hover:bg-gray-800"

            >

                Next

            </button>


        </div>

    );

}