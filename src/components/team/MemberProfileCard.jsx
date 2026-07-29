export default function MemberProfileCard({

    user,

}) {


    return (

        <div className="
            rounded-xl
            border
            bg-white
            p-6
            dark:border-gray-700
            dark:bg-gray-900
        ">


            <div className="
                flex
                flex-col
                gap-6
                sm:flex-row
                sm:items-center
            ">


                {/* Avatar */}

                {

                    user.avatar

                    ?

                    <img

                        src={user.avatar}

                        className="
                            h-24
                            w-24
                            rounded-full
                            object-cover
                        "

                    />

                    :

                    <div className="
                        flex
                        h-24
                        w-24
                        items-center
                        justify-center
                        rounded-full
                        bg-blue-100
                        text-4xl
                        font-bold
                        text-blue-700
                        dark:bg-blue-900/30
                        dark:text-blue-400
                    ">


                        {
                            user.name
                            ?.charAt(0)
                            ?.toUpperCase()
                        }


                    </div>

                }




                {/* Details */}

                <div>


                    <h1 className="
                        text-3xl
                        font-bold
                        text-gray-900
                        dark:text-white
                    ">

                        {user.name}

                    </h1>



                    <p className="
                        mt-1
                        text-gray-500
                        dark:text-gray-400
                    ">

                        {user.email}

                    </p>



                    <div className="
                        mt-4
                        flex
                        flex-wrap
                        gap-3
                    ">


                        <span className="
                            rounded-full
                            bg-blue-100
                            px-3
                            py-1
                            text-sm
                            text-blue-700
                            dark:bg-blue-900/30
                            dark:text-blue-400
                        ">

                            {user.role}

                        </span>



                        <span

                            className={`
                                rounded-full
                                px-3
                                py-1
                                text-sm
                                ${
                                    user.isActive

                                    ?

                                    " bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"

                                    :

                                    " bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                                }
                            `}

                        >

                            {
                                user.isActive
                                ?
                                "Active"
                                :
                                "Inactive"
                            }


                        </span>


                    </div>


                </div>


            </div>




            {/* Info */}

            <div className="mt-6 grid gap-4 sm:grid-cols-3">


                <InfoItem

                    label="Phone"

                    value={user.phone || "-"}

                />


                <InfoItem

                    label="Joined"

                    value={

                        new Date(
                            user.createdAt
                        ).toLocaleDateString()

                    }

                />



                <InfoItem

                    label="Last Updated"

                    value={

                        new Date(
                            user.updatedAt
                        )
                        .toLocaleDateString()

                    }

                />


            </div>


        </div>

    );

}




function InfoItem({

    label,

    value,

}) {


    return (

        <div>


            <p className=" text-xstext-gray-500dark:text-gray-400">

                {label}

            </p>


            <p className=" mt-1 font-medium text-gray-900 dark:text-white">

                {value}

            </p>


        </div>

    );

}