export default function ProjectFilters({

    filters,

    setFilters,

}) {

    return (

        <div className="flex flex-wrap gap-3">

            <select

                value={filters.status}

                onChange={(e) =>

                    setFilters((prev) => ({

                        ...prev,

                        status: e.target.value,

                        page: 1,

                    }))

                }

                className="rounded-lg border border-gray-300 bg-transparent px-3 py-2 dark:border-gray-700"

            >

                <option value="">

                    All Status

                </option>

                <option value="Planning">

                    Planning

                </option>

                <option value="Active">

                    Active

                </option>

                <option value="Completed">

                    Completed

                </option>

                <option value="Archived">

                    Archived

                </option>

            </select>

            <select

                value={filters.sort}

                onChange={(e) =>

                    setFilters((prev) => ({

                        ...prev,

                        sort: e.target.value,

                    }))

                }

                className="rounded-lg border border-gray-300 bg-transparent px-3 py-2 dark:border-gray-700"

            >

                <option value="-createdAt">

                    Newest

                </option>

                <option value="createdAt">

                    Oldest

                </option>

                <option value="name">

                    Name A-Z

                </option>

                <option value="-name">

                    Name Z-A

                </option>

            </select>

        </div>

    );

}