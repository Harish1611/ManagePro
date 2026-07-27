export default function AuthInput({

    label,

    error,

    ...props

}) {

    return (

        <div className="mb-5">

            <label className="mb-2 block font-medium">

                {label}

            </label>

            <input

                {...props}

                className={`w-full rounded-lg border px-4 py-3 outline-none

                ${error
                    ? "border-red-500"
                    : "border-gray-300"

                    }

                focus:border-blue-600`}

            />

            {error && (

                <p className="mt-1 text-sm text-red-500">

                    {error.message}

                </p>

            )}

        </div>

    );

}