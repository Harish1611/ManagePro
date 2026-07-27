import {
    FiFolderPlus
} from "react-icons/fi";


export default function EmptyProjects({

    onCreate,

}) {

    return (

        <div

            className="
            flex
            flex-col
            items-center
            justify-center
            rounded-xl
            border
            border-dashed
            border-gray-300
            bg-white
            px-6
            py-16
            text-center
            dark:border-gray-700
            dark:bg-gray-900
            "

        >


            <div

                className="
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                bg-blue-100
                text-blue-600
                dark:bg-blue-500/20
                dark:text-blue-400
                "

            >

                <FiFolderPlus size={40}/>

            </div>


            <h2 className="mt-6 text-xl font-semibold">

                No Projects Found

            </h2>


            <p className="mt-2 max-w-md text-sm text-gray-500 dark:text-gray-400">

                Start creating projects to organize your team's work.

            </p>


           <button

onClick={onCreate}

className="
mt-6
rounded-lg
bg-blue-600
px-6
py-3
text-white
"

>

Create Project

</button>


        </div>

    );

}