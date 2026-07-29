import {
    FiX
} from "react-icons/fi";


export default function Modal({

    open,

    onClose,
    loading,

    title,

    children

}) {


    if (!open) return null;

    if(loading){

    return;

}


    return (

        <div
            className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/50
            px-4
            "
        >

            <div
                className="
                w-full
                max-w-lg
                rounded-xl
                bg-white
                p-6
                shadow-xl
                dark:bg-gray-900
                "
            >

                <div
                    className="
                    mb-5
                    flex
                    items-center
                    justify-between
                    "
                >

                    <h2 className="text-xl font-semibold">

                        {title}

                    </h2>


                    <button
                        onClick={onClose}
                        disabled={loading}

                        className="
                        rounded-lg
                        p-2
                        hover:bg-gray-100
                        dark:hover:bg-gray-800
                        "
                    >

                        <FiX />

                    </button>


                </div>


                {children}


            </div>


        </div>

    );

}