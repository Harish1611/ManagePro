import { useNavigate } from "react-router-dom";


export default function MemberTable({

    members = [],

    pagination,

    onPageChange,

}) {


    const navigate = useNavigate();



    return (

        <div className="
            overflow-hidden
            rounded-xl
            border
            bg-white
            dark:border-gray-700
            dark:bg-gray-900
        ">


            <div className="overflow-x-auto">


                <table className="
                    w-full
                    text-left
                ">


                    <thead className="
                        border-b
                        bg-gray-50
                        dark:border-gray-700
                        dark:bg-gray-800
                    ">


                        <tr>


                            <th className="
                                px-6
                                py-3
                                text-sm
                                font-semibold
                                text-gray-700
                                dark:text-gray-300
                            ">

                                Member

                            </th>


                            <th className="
                                px-6
                                py-3
                                text-sm
                                font-semibold
                                text-gray-700
                                dark:text-gray-300
                            ">

                                Email

                            </th>


                            <th className="
                                px-6
                                py-3
                                text-sm
                                font-semibold
                                text-gray-700
                                dark:text-gray-300
                            ">

                                Role

                            </th>


                            <th className="
                                px-6
                                py-3
                                text-sm
                                font-semibold
                                text-gray-700
                                dark:text-gray-300
                            ">

                                Status

                            </th>


                            <th className="
                                px-6
                                py-3
                                text-sm
                                font-semibold
                                text-gray-700
                                dark:text-gray-300
                            ">

                                Joined

                            </th>


                        </tr>


                    </thead>



                    <tbody>


                        {
                            members.map((member)=>(


                                <tr

                                    key={member._id}

                                    onClick={()=>


                                        navigate(

                                            `/team/${member._id}`

                                        )


                                    }

                                    className="
                                        cursor-pointer
                                        border-b
                                        transition
                                        hover:bg-gray-50
                                        dark:border-gray-700
                                        dark:hover:bg-gray-800
                                    "

                                >


                                    <td className="px-6 py-4">


                                        <div className="
                                            flex
                                            items-center
                                            gap-3
                                        ">


                                            {
                                                member.avatar

                                                ?

                                                <img

                                                    src={member.avatar}

                                                    className="
                                                        h-10
                                                        w-10
                                                        rounded-full
                                                        object-cover
                                                    "

                                                />

                                                :

                                                <div className="
                                                    flex
                                                    h-10
                                                    w-10
                                                    items-center
                                                    justify-center
                                                    rounded-full
                                                    bg-blue-100
                                                    font-semibold
                                                    text-blue-700
                                                    dark:bg-blue-900/30
                                                    dark:text-blue-400
                                                ">

                                                    {
                                                        member.name
                                                            ?.charAt(0)
                                                            ?.toUpperCase()
                                                    }

                                                </div>

                                            }



                                            <div>


                                                <p className="
                                                    font-medium
                                                    text-gray-900
                                                    dark:text-white
                                                ">

                                                    {member.name}

                                                </p>


                                            </div>


                                        </div>


                                    </td>



                                    <td className="
                                        px-6
                                        py-4
                                        text-gray-600
                                        dark:text-gray-400
                                    ">

                                        {member.email}

                                    </td>



                                    <td className="px-6 py-4">


                                        <span className="
                                            rounded-full
                                            bg-blue-100
                                            px-3
                                            py-1
                                            text-xs
                                            text-blue-700
                                            dark:bg-blue-900/30
                                            dark:text-blue-400
                                        ">

                                            {member.role}

                                        </span>


                                    </td>



                                    <td className="px-6 py-4">


                                        {

                                            member.isActive

                                            ?

                                            <span className="
                                                text-green-600
                                                dark:text-green-400
                                            ">

                                                Active

                                            </span>

                                            :

                                            <span className="
                                                text-red-600
                                                dark:text-red-400
                                            ">

                                                Inactive

                                            </span>

                                        }


                                    </td>



                                    <td className="
                                        px-6
                                        py-4
                                        text-gray-600
                                        dark:text-gray-400
                                    ">


                                        {
                                            new Date(
                                                member.createdAt
                                            )
                                            .toLocaleDateString()
                                        }


                                    </td>



                                </tr>


                            ))
                        }


                    </tbody>


                </table>


            </div>



            {/* Pagination */}

            {
                pagination &&

                pagination.totalPages > 1 &&

                (

                    <div className="
                        flex
                        items-center
                        justify-end
                        gap-2
                        border-t
                        p-4
                        dark:border-gray-700
                    ">


                        {
                            Array.from(

                                {
                                    length:
                                    pagination.totalPages
                                }

                            )
                            .map((_,index)=>(


                                <button

                                    key={index}

                                    onClick={()=>


                                        onPageChange(

                                            index + 1

                                        )


                                    }

                                    className={`
                                        rounded-lg
                                        px-3
                                        py-1
                                        text-sm
                                        ${
                                            pagination.page === index + 1

                                            ?

                                            "bg-blue-600 text-white"

                                            :

                                            "bg-gray-100 dark:bg-gray-800 dark:text-gray-300"
                                        }
                                    `}

                                >

                                    {index+1}

                                </button>


                            ))
                        }


                    </div>

                )

            }


        </div>

    );

}