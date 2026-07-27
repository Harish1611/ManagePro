import {

    FaBars,

    FaBell,

    FaSearch

} from "react-icons/fa";

import ThemeToggle from "@/components/theme/ThemeToggle";

import ProfileDropdown from "./ProfileDropdown";

export default function Navbar({

    setOpen

}) {

    return (

        <header

            className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-white px-6 dark:border-slate-700 dark:bg-slate-900"

        >

            <div className="flex items-center gap-4">

                <button

                    className="md:hidden"

                    onClick={() =>
                        setOpen(true)
                    }

                >

                    <FaBars />

                </button>

                <div className="relative hidden md:block">

                    <FaSearch className="absolute left-3 top-3 text-gray-400" />

                    <input

                        placeholder="Search..."

                        className="rounded-lg border py-2 pl-10 pr-4"

                    />

                </div>

            </div>

            <div className="flex items-center gap-4">

                <button className="relative">

                    <FaBell size={18} />

                    <span

                        className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500"

                    />

                </button>

                <ThemeToggle />

                <ProfileDropdown />

            </div>

        </header>

    );

}