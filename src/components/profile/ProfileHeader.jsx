import {

    CalendarDays,

    Mail,

    Phone,

    ShieldCheck,

} from "lucide-react";


export default function ProfileHeader({

    profile,

}) {


    /*
    |--------------------------------------------------------------------------
    | Avatar
    |--------------------------------------------------------------------------
    */

    const avatarFallback = `https://ui-avatars.com/api/?name=${encodeURIComponent(

        profile?.name || "User"

    )}&background=2563eb&color=ffffff&size=256`;


    /*
    |--------------------------------------------------------------------------
    | Backend Base URL
    |--------------------------------------------------------------------------
    */

    const apiBaseUrl = (

        import.meta.env.VITE_API_URL ||

        ""

    ).replace(

        /\/api\/?$/,

        ""

    );


    /*
    |--------------------------------------------------------------------------
    | Avatar URL
    |--------------------------------------------------------------------------
    */

    const avatarUrl = profile?.avatar

        ? profile.avatar.startsWith("http://") ||

          profile.avatar.startsWith("https://")

            ? profile.avatar

            : `${apiBaseUrl}${

                profile.avatar.startsWith("/")

                    ? profile.avatar

                    : `/${profile.avatar}`

            }`

        : avatarFallback;


    /*
    |--------------------------------------------------------------------------
    | Joined Date
    |--------------------------------------------------------------------------
    */

    const joinedDate = profile?.createdAt

        ? new Date(

            profile.createdAt

        ).toLocaleDateString(

            "en-US",

            {

                month: "long",

                year: "numeric",

            }

        )

        : "Not available";


    return (

        <section
            className="
                overflow-hidden
                rounded-2xl
                border
                border-gray-200
                bg-white
                shadow-sm
                dark:border-gray-700
                dark:bg-gray-900
            "
        >

            {/*
            |--------------------------------------------------------------------------
            | Cover
            |--------------------------------------------------------------------------
            */}

            <div
                className="
                    h-28
                    bg-gradient-to-r
                    from-blue-600
                    via-indigo-600
                    to-purple-600
                    sm:h-36
                "
            />


            {/*
            |--------------------------------------------------------------------------
            | Profile Information
            |--------------------------------------------------------------------------
            */}

            <div
                className="
                    px-5
                    pb-6
                    sm:px-7
                    sm:pb-7
                "
            >

                <div
                    className="
                        flex
                        flex-col
                        gap-5
                        sm:flex-row
                        sm:items-end
                        sm:justify-between
                    "
                >

                    <div
                        className="
                            flex
                            flex-col
                            gap-4
                            sm:flex-row
                            sm:items-end
                        "
                    >

                        <img

                            key={profile?.avatar}

                            src={avatarUrl}

                            onError={(event) => {

                                event.currentTarget.onerror = null;

                                event.currentTarget.src = avatarFallback;

                            }}

                            alt={

                                profile?.name ||

                                "Profile avatar"

                            }

                            className="
                                -mt-14
                                h-28
                                w-28
                                rounded-full
                                border-4
                                border-white
                                bg-white
                                object-cover
                                shadow-md
                                dark:border-gray-900
                                dark:bg-gray-900
                                sm:-mt-16
                                sm:h-32
                                sm:w-32
                            "

                        />


                        <div className="pb-1">

                            <h1
                                className="
                                    text-2xl
                                    font-bold
                                    text-gray-900
                                    dark:text-white
                                    sm:text-3xl
                                "
                            >

                                {

                                    profile?.name ||

                                    "User Profile"

                                }

                            </h1>

                            <p
                                className="
                                    mt-1
                                    text-sm
                                    capitalize
                                    text-gray-500
                                    dark:text-gray-400
                                "
                            >

                                {

                                    profile?.role ||

                                    "Member"

                                }

                            </p>

                        </div>

                    </div>


                    <span
                        className="
                            inline-flex
                            w-fit
                            items-center
                            gap-2
                            rounded-full
                            bg-green-50
                            px-3
                            py-1.5
                            text-sm
                            font-medium
                            text-green-700
                            dark:bg-green-950/40
                            dark:text-green-400
                        "
                    >

                        <span
                            className="
                                h-2
                                w-2
                                rounded-full
                                bg-green-500
                            "
                        />

                        Active Account

                    </span>

                </div>


                {/*
                |--------------------------------------------------------------------------
                | Contact Details
                |--------------------------------------------------------------------------
                */}

                <div
                    className="
                        mt-6
                        grid
                        gap-4
                        border-t
                        border-gray-200
                        pt-6
                        dark:border-gray-700
                        sm:grid-cols-2
                        xl:grid-cols-4
                    "
                >

                    <div
                        className="
                            flex
                            items-start
                            gap-3
                        "
                    >

                        <div
                            className="
                                rounded-lg
                                bg-blue-50
                                p-2.5
                                text-blue-600
                                dark:bg-blue-950/40
                                dark:text-blue-400
                            "
                        >

                            <Mail size={19} />

                        </div>

                        <div className="min-w-0">

                            <p
                                className="
                                    text-xs
                                    font-medium
                                    uppercase
                                    tracking-wide
                                    text-gray-400
                                "
                            >

                                Email

                            </p>

                            <p
                                className="
                                    mt-1
                                    truncate
                                    text-sm
                                    font-medium
                                    text-gray-700
                                    dark:text-gray-200
                                "
                            >

                                {

                                    profile?.email ||

                                    "Not available"

                                }

                            </p>

                        </div>

                    </div>


                    <div
                        className="
                            flex
                            items-start
                            gap-3
                        "
                    >

                        <div
                            className="
                                rounded-lg
                                bg-purple-50
                                p-2.5
                                text-purple-600
                                dark:bg-purple-950/40
                                dark:text-purple-400
                            "
                        >

                            <Phone size={19} />

                        </div>

                        <div>

                            <p
                                className="
                                    text-xs
                                    font-medium
                                    uppercase
                                    tracking-wide
                                    text-gray-400
                                "
                            >

                                Phone

                            </p>

                            <p
                                className="
                                    mt-1
                                    text-sm
                                    font-medium
                                    text-gray-700
                                    dark:text-gray-200
                                "
                            >

                                {

                                    profile?.phone ||

                                    "Not provided"

                                }

                            </p>

                        </div>

                    </div>


                    <div
                        className="
                            flex
                            items-start
                            gap-3
                        "
                    >

                        <div
                            className="
                                rounded-lg
                                bg-amber-50
                                p-2.5
                                text-amber-600
                                dark:bg-amber-950/40
                                dark:text-amber-400
                            "
                        >

                            <ShieldCheck size={19} />

                        </div>

                        <div>

                            <p
                                className="
                                    text-xs
                                    font-medium
                                    uppercase
                                    tracking-wide
                                    text-gray-400
                                "
                            >

                                Role

                            </p>

                            <p
                                className="
                                    mt-1
                                    text-sm
                                    font-medium
                                    capitalize
                                    text-gray-700
                                    dark:text-gray-200
                                "
                            >

                                {

                                    profile?.role ||

                                    "Member"

                                }

                            </p>

                        </div>

                    </div>


                    <div
                        className="
                            flex
                            items-start
                            gap-3
                        "
                    >

                        <div
                            className="
                                rounded-lg
                                bg-green-50
                                p-2.5
                                text-green-600
                                dark:bg-green-950/40
                                dark:text-green-400
                            "
                        >

                            <CalendarDays size={19} />

                        </div>

                        <div>

                            <p
                                className="
                                    text-xs
                                    font-medium
                                    uppercase
                                    tracking-wide
                                    text-gray-400
                                "
                            >

                                Joined

                            </p>

                            <p
                                className="
                                    mt-1
                                    text-sm
                                    font-medium
                                    text-gray-700
                                    dark:text-gray-200
                                "
                            >

                                {joinedDate}

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}