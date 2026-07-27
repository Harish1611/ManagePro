import {

    FaBars,

    FaChevronLeft

} from "react-icons/fa";

import { navigation } from "@/constants/navigation";

import NavItem from "./NavItem";

export default function Sidebar({

    collapsed,

    setCollapsed

}) {

    return (

        <aside

            className={`

            hidden

            md:flex

            flex-col

            border-r

            dark:border-slate-700

            bg-white

            dark:bg-slate-900

            transition-all

            duration-300

            ${collapsed ? "w-20" : "w-64"}

            `}

        >

            <div

                className="flex h-16 items-center justify-between px-4"

            >

                {!collapsed && (

                    <h2 className="font-bold text-xl">

                        TeamTask

                    </h2>

                )}

                <button

                    onClick={() =>
                        setCollapsed(!collapsed)
                    }

                >

                    {collapsed
                        ? <FaBars />
                        : <FaChevronLeft />}

                </button>

            </div>

            <nav className="space-y-2 p-3">

                {navigation.map(item => (

                    <NavItem

                        key={item.path}

                        item={item}

                        collapsed={collapsed}

                    />

                ))}

            </nav>

        </aside>

    );

}