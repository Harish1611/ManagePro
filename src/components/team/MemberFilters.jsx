import TaskSearch from "@/components/tasks/TaskSearch";


export default function MemberFilters({

    filters,

    setFilters,

}) {


    return (

        <div className="
            flex
            flex-col
            gap-4
            lg:flex-row
            lg:flex-wrap
        ">


            {/* Search */}

            <TaskSearch

                value={filters.search}

                onChange={(e)=>


                    setFilters({

                        ...filters,

                        search:e.target.value,

                        page:1,

                    })


                }

            />



            {/* Role */}

            <select

                value={filters.role || ""}

                onChange={(e)=>

                    setFilters({

                        ...filters,

                        role:e.target.value,

                        page:1,

                    })

                }

                className="
                    rounded-lg
                    border
                    px-3
                    py-2
                    bg-white
                    text-gray-900
                    dark:border-gray-700
                    dark:bg-gray-900
                    dark:text-white
                "

            >

                <option value="">

                    All Roles

                </option>


                <option value="Admin">

                    Admin

                </option>


                <option value="Manager">

                    Manager

                </option>


                <option value="Member">

                    Member

                </option>


            </select>



            {/* Status */}

            <select

                value={filters.status || ""}

                onChange={(e)=>

                    setFilters({

                        ...filters,

                        status:e.target.value,

                        page:1,

                    })

                }


                className="
                    rounded-lg
                    border
                    px-3
                    py-2
                    bg-white
                    text-gray-900
                    dark:border-gray-700
                    dark:bg-gray-900
                    dark:text-white
                "

            >

                <option value="">

                    All Status

                </option>


                <option value="active">

                    Active

                </option>


                <option value="inactive">

                    Inactive

                </option>


            </select>



            {/* Sort */}

            <select

                value={filters.sort}

                onChange={(e)=>

                    setFilters({

                        ...filters,

                        sort:e.target.value,

                        page:1,

                    })

                }


                className="
                    rounded-lg
                    border
                    px-3
                    py-2
                    bg-white
                    text-gray-900
                    dark:border-gray-700
                    dark:bg-gray-900
                    dark:text-white
                "

            >

                <option value="-createdAt">

                    Newest Joined

                </option>


                <option value="createdAt">

                    Oldest Joined

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