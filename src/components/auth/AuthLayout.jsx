import { Link } from "react-router-dom";

export default function AuthLayout({

    title,

    subtitle,

    children,

    footerText,

    footerLink,

    footerLabel

}) {

    return (

        <div className="min-h-screen bg-slate-100 dark:bg-slate-900 flex items-center justify-center p-4">

            <div className="w-full max-w-md rounded-xl bg-white dark:bg-slate-800 shadow-lg p-8">

                <h1 className="text-3xl font-bold text-center">

                    {title}

                </h1>

                <p className="text-center text-gray-500 mt-2 mb-8">

                    {subtitle}

                </p>

                {children}

                <p className="mt-6 text-center">

                    {footerText}{" "}

                    <Link
                        to={footerLink}
                        className="text-blue-600 font-semibold"
                    >
                        {footerLabel}
                    </Link>

                </p>

            </div>

        </div>

    );

}