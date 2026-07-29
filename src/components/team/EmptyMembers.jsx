import {

    Users,

} from "lucide-react";


export default function EmptyMembers() {


    return (

        <div className="
            flex
            flex-col
            items-center
            justify-center
            rounded-xl
            border
            bg-white
            py-16
            text-center
            dark:border-gray-700
            dark:bg-gray-900
        ">


            <div className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                bg-gray-100
                dark:bg-gray-800
            ">


                <Users

                    size={32}

                    className="
                        text-gray-400
                    "

                />


            </div>



            <h3 className="
                mt-5
                text-lg
                font-semibold
                text-gray-900
                dark:text-white
            ">

                No team members found

            </h3>



            <p className="
                mt-2
                max-w-md
                text-sm
                text-gray-500
                dark:text-gray-400
            ">

                No members match your search criteria.
                Try changing filters or invite a new member.

            </p>



        </div>

    );

}