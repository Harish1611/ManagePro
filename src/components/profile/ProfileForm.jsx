import {

    useEffect,

} from "react";


import {

    useForm,

} from "react-hook-form";


import {

    yupResolver,

} from "@hookform/resolvers/yup";


import {

    useDispatch,

} from "react-redux";


import toast from "react-hot-toast";


import {

    profileSchema,

} from "@/validation/profileValidation";


import {

    updateProfile,

} from "@/redux/slices/profileSlice";


import getErrorMessage from "@/utils/getErrorMessage";


export default function ProfileForm({

    profile,

}) {


    const dispatch = useDispatch();


    const {

        register,

        handleSubmit,

        reset,

        formState: {

            errors,

            isSubmitting,

            isDirty,

        },

    } = useForm({

        resolver: yupResolver(

            profileSchema

        ),

        defaultValues: {

            name: "",

            email: "",

            phone: "",

        },

    });


    /*
    |--------------------------------------------------------------------------
    | Populate Profile
    |--------------------------------------------------------------------------
    */

    useEffect(() => {

        if (!profile) {

            return;

        }

        reset({

            name: profile.name || "",

            email: profile.email || "",

            phone: profile.phone || "",

        });

    }, [

        profile,

        reset,

    ]);


    /*
    |--------------------------------------------------------------------------
    | Submit Profile
    |--------------------------------------------------------------------------
    */

    const submitHandler = async (data) => {

        try {

            const profileData = {

                name: data.name,

                phone: data.phone || "",

            };


            await dispatch(

                updateProfile(

                    profileData

                )

            ).unwrap();


            toast.success(

                "Profile updated successfully"

            );

        }

        catch (error) {

            toast.error(

                getErrorMessage(error)

            );

        }

    };


    return (

        <section
            className="
                rounded-2xl
                border
                border-gray-200
                bg-white
                p-5
                shadow-sm
                dark:border-gray-700
                dark:bg-gray-900
                sm:p-6
            "
        >

            <div className="mb-6">

                <h2
                    className="
                        text-xl
                        font-semibold
                        text-gray-900
                        dark:text-white
                    "
                >

                    Edit Profile

                </h2>

                <p
                    className="
                        mt-1
                        text-sm
                        text-gray-500
                        dark:text-gray-400
                    "
                >

                    Update your personal information.

                </p>

            </div>


            <form

                onSubmit={

                    handleSubmit(

                        submitHandler

                    )

                }

                className="space-y-5"

            >

                <div
                    className="
                        grid
                        gap-5
                        md:grid-cols-2
                    "
                >

                    {/*
                    |--------------------------------------------------------------------------
                    | Name
                    |--------------------------------------------------------------------------
                    */}

                    <div>

                        <label
                            htmlFor="name"
                            className="
                                block
                                text-sm
                                font-medium
                                text-gray-700
                                dark:text-gray-300
                            "
                        >

                            Full Name

                        </label>

                        <input

                            id="name"

                            type="text"

                            {...register("name")}

                            placeholder="Enter your full name"

                            className={`
                                mt-2
                                w-full
                                rounded-lg
                                border
                                bg-white
                                px-4
                                py-2.5
                                text-gray-900
                                outline-none
                                transition
                                focus:ring-2
                                dark:bg-gray-800
                                dark:text-white
                                ${
                                    errors.name

                                        ? `
                                            border-red-500
                                            focus:border-red-500
                                            focus:ring-red-500/20
                                        `

                                        : `
                                            border-gray-300
                                            focus:border-blue-500
                                            focus:ring-blue-500/20
                                            dark:border-gray-700
                                        `
                                }
                            `}

                        />

                        {

                            errors.name && (

                                <p
                                    className="
                                        mt-1.5
                                        text-sm
                                        text-red-500
                                    "
                                >

                                    {errors.name.message}

                                </p>

                            )

                        }

                    </div>


                    {/*
                    |--------------------------------------------------------------------------
                    | Email
                    |--------------------------------------------------------------------------
                    */}

                    <div>

                        <label
                            htmlFor="email"
                            className="
                                block
                                text-sm
                                font-medium
                                text-gray-700
                                dark:text-gray-300
                            "
                        >

                            Email Address

                        </label>

                        <input

                            id="email"

                            type="email"

                            disabled

                            {...register("email")}

                            className="
                                mt-2
                                w-full
                                cursor-not-allowed
                                rounded-lg
                                border
                                border-gray-300
                                bg-gray-100
                                px-4
                                py-2.5
                                text-gray-500
                                outline-none
                                dark:border-gray-700
                                dark:bg-gray-800/60
                                dark:text-gray-400
                            "

                        />

                        <p
                            className="
                                mt-1.5
                                text-xs
                                text-gray-400
                                dark:text-gray-500
                            "
                        >

                            Email cannot be changed here.

                        </p>

                    </div>


                    {/*
                    |--------------------------------------------------------------------------
                    | Phone
                    |--------------------------------------------------------------------------
                    */}

                    <div className="md:col-span-2">

                        <label
                            htmlFor="phone"
                            className="
                                block
                                text-sm
                                font-medium
                                text-gray-700
                                dark:text-gray-300
                            "
                        >

                            Phone Number

                        </label>

                        <input

                            id="phone"

                            type="tel"

                            {...register("phone")}

                            placeholder="Enter your phone number"

                            className={`
                                mt-2
                                w-full
                                rounded-lg
                                border
                                bg-white
                                px-4
                                py-2.5
                                text-gray-900
                                outline-none
                                transition
                                focus:ring-2
                                dark:bg-gray-800
                                dark:text-white
                                ${
                                    errors.phone

                                        ? `
                                            border-red-500
                                            focus:border-red-500
                                            focus:ring-red-500/20
                                        `

                                        : `
                                            border-gray-300
                                            focus:border-blue-500
                                            focus:ring-blue-500/20
                                            dark:border-gray-700
                                        `
                                }
                            `}

                        />

                        {

                            errors.phone && (

                                <p
                                    className="
                                        mt-1.5
                                        text-sm
                                        text-red-500
                                    "
                                >

                                    {errors.phone.message}

                                </p>

                            )

                        }

                    </div>

                </div>


                {/*
                |--------------------------------------------------------------------------
                | Submit
                |--------------------------------------------------------------------------
                */}

                <div
                    className="
                        flex
                        justify-end
                        border-t
                        border-gray-200
                        pt-5
                        dark:border-gray-700
                    "
                >

                    <button

                        type="submit"

                        disabled={

                            isSubmitting ||

                            !isDirty

                        }

                        className="
                            rounded-lg
                            bg-blue-600
                            px-6
                            py-2.5
                            text-sm
                            font-medium
                            text-white
                            transition
                            hover:bg-blue-700
                            disabled:cursor-not-allowed
                            disabled:opacity-50
                        "

                    >

                        {

                            isSubmitting

                                ? "Saving..."

                                : "Save Changes"

                        }

                    </button>

                </div>

            </form>

        </section>

    );

}