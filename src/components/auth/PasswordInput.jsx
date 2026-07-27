import { useState } from "react";

import {
    FaEye,
    FaEyeSlash,
} from "react-icons/fa";

export default function PasswordInput({

    register,

    name,

    error,

    label

}) {

    const [show, setShow] = useState(false);

    return (

        <div className="mb-5">

            <label className="mb-2 block font-medium">

                {label}

            </label>

            <div className="relative">

                <input

                    type={
                        show
                            ? "text"
                            : "password"
                    }

                    {...register(name)}

                    className={`w-full rounded-lg border px-4 py-3 pr-12

                    ${error
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}

                />

                <button

                    type="button"

                    onClick={() =>
                        setShow(!show)
                    }

                    className="absolute right-4 top-4"

                >

                    {show
                        ? <FaEyeSlash />
                        : <FaEye />}

                </button>

            </div>

            {error && (

                <p className="text-red-500 text-sm mt-1">

                    {error.message}

                </p>

            )}

        </div>

    );

}