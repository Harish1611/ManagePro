import {

    ArrowLeft,

    LayoutDashboard,

    SearchX,

} from "lucide-react";

import {

    Link,

    useNavigate,

} from "react-router-dom";


export default function NotFound() {

    const navigate =

        useNavigate();


    return (

        <main
            className="
                flex
                min-h-screen
                items-center
                justify-center
                bg-gray-50
                px-4
                py-10
                dark:bg-slate-950
            "
        >

            <div
                className="
                    w-full
                    max-w-xl
                    rounded-3xl
                    border
                    border-gray-200
                    bg-white
                    p-8
                    text-center
                    shadow-sm
                    dark:border-gray-800
                    dark:bg-slate-900
                    sm:p-12
                "
            >

                {/*
                |--------------------------------------------------------------------------
                | Icon
                |--------------------------------------------------------------------------
                */}

                <div
                    className="
                        mx-auto
                        flex
                        h-20
                        w-20
                        items-center
                        justify-center
                        rounded-3xl
                        bg-indigo-100
                        text-indigo-600
                        dark:bg-indigo-500/10
                        dark:text-indigo-400
                    "
                >

                    <SearchX

                        size={38}

                        strokeWidth={1.8}

                        aria-hidden="true"

                    />

                </div>


                {/*
                |--------------------------------------------------------------------------
                | Content
                |--------------------------------------------------------------------------
                */}

                <p
                    className="
                        mt-6
                        text-sm
                        font-semibold
                        uppercase
                        tracking-[0.25em]
                        text-indigo-600
                        dark:text-indigo-400
                    "
                >

                    Error 404

                </p>


                <h1
                    className="
                        mt-3
                        text-3xl
                        font-bold
                        tracking-tight
                        text-gray-900
                        dark:text-white
                        sm:text-4xl
                    "
                >

                    Page not found

                </h1>


                <p
                    className="
                        mx-auto
                        mt-4
                        max-w-md
                        text-sm
                        leading-6
                        text-gray-500
                        dark:text-gray-400
                        sm:text-base
                    "
                >

                    The page you are looking for may have been moved, deleted,
                    or the address may be incorrect.

                </p>


                <div
                    className="
                        mx-auto
                        mt-6
                        h-1
                        w-20
                        rounded-full
                        bg-indigo-600
                        dark:bg-indigo-400
                    "
                />


                {/*
                |--------------------------------------------------------------------------
                | Actions
                |--------------------------------------------------------------------------
                */}

                <div
                    className="
                        mt-8
                        flex
                        flex-col
                        justify-center
                        gap-3
                        sm:flex-row
                    "
                >

                    <button

                        type="button"

                        onClick={() => navigate(-1)}

                        className="
                            inline-flex
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            border
                            border-gray-200
                            bg-white
                            px-5
                            py-2.5
                            text-sm
                            font-semibold
                            text-gray-700
                            shadow-sm
                            transition
                            hover:border-indigo-200
                            hover:bg-indigo-50
                            hover:text-indigo-600
                            focus:outline-none
                            focus:ring-2
                            focus:ring-indigo-500/20
                            dark:border-gray-700
                            dark:bg-slate-900
                            dark:text-gray-300
                            dark:hover:border-indigo-500/40
                            dark:hover:bg-indigo-500/10
                            dark:hover:text-indigo-400
                        "

                    >

                        <ArrowLeft

                            size={18}

                            aria-hidden="true"

                        />

                        Go Back

                    </button>


                    <Link

                        to="/dashboard"

                        className="
                            inline-flex
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            bg-indigo-600
                            px-5
                            py-2.5
                            text-sm
                            font-semibold
                            text-white
                            shadow-sm
                            transition
                            hover:bg-indigo-700
                            focus:outline-none
                            focus:ring-2
                            focus:ring-indigo-500/30
                        "

                    >

                        <LayoutDashboard

                            size={18}

                            aria-hidden="true"

                        />

                        Go to Dashboard

                    </Link>

                </div>

            </div>

        </main>

    );

}