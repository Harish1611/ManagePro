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

    changePasswordSchema,

} from "@/validation/profileValidation";


import {

    changePassword,

} from "@/redux/slices/profileSlice";


import getErrorMessage from "@/utils/getErrorMessage";


export default function ChangePasswordForm() {


    const dispatch = useDispatch();


    const {

        register,

        handleSubmit,

        reset,

        formState: {

            errors,

            isSubmitting,

        },

    } = useForm({

        resolver: yupResolver(

            changePasswordSchema

        ),

        defaultValues: {

            currentPassword: "",

            newPassword: "",

            confirmPassword: "",

        },

    });


    /*
    |--------------------------------------------------------------------------
    | Submit Password
    |--------------------------------------------------------------------------
    */

    const submitHandler = async (data) => {

        try {

            const passwordData = {

                currentPassword:

                    data.currentPassword,

                newPassword:

                    data.newPassword,

                confirmPassword:

                    data.confirmPassword,

            };


            await dispatch(

                changePassword(

                    passwordData

                )

            ).unwrap();


            toast.success(

                "Password changed successfully"

            );


            reset();

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

                    Change Password

                </h2>

                <p
                    className="
                        mt-1
                        text-sm
                        text-gray-500
                        dark:text-gray-400
                    "
                >

                    Use a strong password that you do not use elsewhere.

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

                {/*
                |--------------------------------------------------------------------------
                | Current Password
                |--------------------------------------------------------------------------
                */}

                <div>

                    <label
                        htmlFor="currentPassword"
                        className="
                            block
                            text-sm
                            font-medium
                            text-gray-700
                            dark:text-gray-300
                        "
                    >

                        Current Password

                    </label>

                    <input

                        id="currentPassword"

                        type="password"

                        autoComplete="current-password"

                        {...register(

                            "currentPassword"

                        )}

                        placeholder="Enter your current password"

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
                                errors.currentPassword

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

                        errors.currentPassword && (

                            <p
                                className="
                                    mt-1.5
                                    text-sm
                                    text-red-500
                                "
                            >

                                {

                                    errors
                                        .currentPassword
                                        .message

                                }

                            </p>

                        )

                    }

                </div>


                {/*
                |--------------------------------------------------------------------------
                | New Password
                |--------------------------------------------------------------------------
                */}

                <div>

                    <label
                        htmlFor="newPassword"
                        className="
                            block
                            text-sm
                            font-medium
                            text-gray-700
                            dark:text-gray-300
                        "
                    >

                        New Password

                    </label>

                    <input

                        id="newPassword"

                        type="password"

                        autoComplete="new-password"

                        {...register(

                            "newPassword"

                        )}

                        placeholder="Enter your new password"

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
                                errors.newPassword

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

                        errors.newPassword && (

                            <p
                                className="
                                    mt-1.5
                                    text-sm
                                    text-red-500
                                "
                            >

                                {

                                    errors
                                        .newPassword
                                        .message

                                }

                            </p>

                        )

                    }

                </div>


                {/*
                |--------------------------------------------------------------------------
                | Confirm Password
                |--------------------------------------------------------------------------
                */}

                <div>

                    <label
                        htmlFor="confirmPassword"
                        className="
                            block
                            text-sm
                            font-medium
                            text-gray-700
                            dark:text-gray-300
                        "
                    >

                        Confirm New Password

                    </label>

                    <input

                        id="confirmPassword"

                        type="password"

                        autoComplete="new-password"

                        {...register(

                            "confirmPassword"

                        )}

                        placeholder="Confirm your new password"

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
                                errors.confirmPassword

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

                        errors.confirmPassword && (

                            <p
                                className="
                                    mt-1.5
                                    text-sm
                                    text-red-500
                                "
                            >

                                {

                                    errors
                                        .confirmPassword
                                        .message

                                }

                            </p>

                        )

                    }

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

                        disabled={isSubmitting}

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

                                ? "Changing..."

                                : "Change Password"

                        }

                    </button>

                </div>

            </form>

        </section>

    );

}