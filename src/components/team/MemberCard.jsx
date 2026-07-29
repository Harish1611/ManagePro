import { useNavigate } from "react-router-dom";


export default function MemberCard({

    member,

}) {


    const navigate = useNavigate();



    return (

        <div

            onClick={()=>


                navigate(

                    `/team/${member._id}`

                )


            }

            className="
                cursor-pointer
                rounded-xl
                border
                bg-white
                p-6
                transition
                hover:shadow-lg
                dark:border-gray-700
                dark:bg-gray-900
            "

        >


            <div className="
                flex
                items-center
                gap-4
            ">


                {
                    member.avatar

                    ?

                    <img

                        src={member.avatar}

                        className="
                            h-14
                            w-14
                            rounded-full
                            object-cover
                        "

                    />

                    :

                    <div className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-full
                        bg-blue-100
                        text-xl
                        font-bold
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


                    <h3 className="
                        font-semibold
                        text-gray-900
                        dark:text-white
                    ">

                        {member.name}

                    </h3>


                    <p className="
                        text-sm
                        text-gray-500
                        dark:text-gray-400
                    ">

                        {member.email}

                    </p>


                </div>


            </div>



            <div className="
                mt-5
                flex
                justify-between
            ">


                <div>

                    <p className="
                        text-xs
                        text-gray-500
                    ">

                        Role

                    </p>


                    <p className="
                        font-medium
                        dark:text-white
                    ">

                        {member.role}

                    </p>


                </div>



                <div>

                    <p className="
                        text-xs
                        text-gray-500
                    ">

                        Status

                    </p>


                    <p className="
                        font-medium
                        text-green-600
                    ">

                        {
                            member.isActive
                            ?
                            "Active"
                            :
                            "Inactive"
                        }

                    </p>


                </div>


            </div>


        </div>

    );

}