import {
    Plus,
    Grid,
    List,
} from "lucide-react";


export default function MemberHeader({

    onInvite,

    view,

    setView,

}) {


    return (

        <div className="
            flex
            flex-col
            gap-4
            sm:flex-row
            sm:items-center
            sm:justify-between
        ">


            {/* Title */}

            <div>

                <h1 className="
                    text-3xl
                    font-bold
                    text-gray-900
                    dark:text-white
                ">

                    Team Members

                </h1>


                <p className="
                    mt-1
                    text-gray-500
                    dark:text-gray-400
                ">

                    Manage team members, projects and workload.

                </p>

            </div>



            {/* Actions */}

            <div className="
                flex
                items-center
                gap-3
            ">


                {/* View Toggle */}

                <div className="
                    flex
                    rounded-lg
                    border
                    bg-white
                    dark:border-gray-700
                    dark:bg-gray-900
                ">


                    <button

                        onClick={() => setView("table")}

                        className={`
                            flex
                            items-center
                            justify-center
                            rounded-l-lg
                            px-3
                            py-2
                            transition
                            ${view === "table"

                                ?

                                "bg-blue-600 text-white"

                                :

                                "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                            }
                        `}

                    >

                        <List size={18} />

                    </button>



                    <button

                        onClick={() => setView("grid")}

                        className={`
                            flex
                            items-center
                            justify-center
                            rounded-r-lg
                            px-3
                            py-2
                            transition
                            ${view === "grid"

                                ?

                                "bg-blue-600 text-white"

                                :

                                "text-gray-600 hover:bg-gray-100dark:text-gray-300 dark:hover:bg-gray-800"
                            }
                        `}

                    >

                    <Grid size={18} />

                </button>


            </div>



            {/* Invite Button */}

            <button

                onClick={onInvite}

                className="
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        rounded-lg
                        bg-blue-600
                        px-4
                        py-2
                        text-white
                        transition
                        hover:bg-blue-700
                    "

            >

                <Plus size={18} />

                Invite Member

            </button>


        </div>


        </div >

    );

}