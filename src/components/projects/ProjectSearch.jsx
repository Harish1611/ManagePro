import { FiSearch } from "react-icons/fi";

export default function ProjectSearch({

    filters,

    setFilters,

}) {

    return (

        <div className="relative w-full lg:w-80">

            <FiSearch className="absolute left-3 top-3 text-gray-400" />

            <input

                type="text"

                value={filters.search}

                placeholder="Search projects..."

                onChange={(e) =>

                    setFilters((prev) => ({

                        ...prev,

                        search: e.target.value,

                        page: 1,

                    }))

                }

                className="w-full rounded-lg border border-gray-300 bg-transparent py-2 pl-10 pr-4 outline-none focus:border-blue-600 dark:border-gray-700"

            />

        </div>

    );

}