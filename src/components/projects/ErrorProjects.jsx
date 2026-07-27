import {
    FiAlertCircle
} from "react-icons/fi";


export default function ErrorProjects({

    message,

    retry,

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
            border-red-200
            bg-red-50
            px-6
            py-16
            text-center
            dark:border-red-900
            dark:bg-red-900/20
            "

        >

            <FiAlertCircle

                size={45}

                className="text-red-500"

            />


            <h2 className="mt-5 text-xl font-semibold">

                Something went wrong

            </h2>


            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">

                {message ||
                    "Unable to load projects"}

            </p>


            <button

                onClick={retry}

                className="
                mt-6
                rounded-lg
                bg-red-600
                px-5
                py-2
                text-white
                hover:bg-red-700
                "

            >

                Try Again

            </button>


        </div>

    );

}