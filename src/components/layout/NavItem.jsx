import clsx from "clsx";
import { NavLink } from "react-router-dom";

export default function NavItem({

    item,

    collapsed,

    onClick

}) {

    const Icon = item.icon;

    return (

        <NavLink

            to={item.path}

            onClick={onClick}

            className={({ isActive }) =>
                clsx(

                    "flex items-center gap-3 rounded-lg px-4 py-3 transition-all",

                    isActive
                        ? "bg-blue-600 text-white"
                        : "hover:bg-slate-200 dark:hover:bg-slate-700"

                )
            }

        >

            <Icon size={18} />

            {!collapsed && (

                <span>{item.name}</span>

            )}

        </NavLink>

    );

}