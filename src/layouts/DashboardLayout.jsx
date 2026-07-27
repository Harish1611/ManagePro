import {

    Outlet

} from "react-router-dom";

import {

    useState

} from "react";

import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";
import MobileSidebar from "@/components/layout/MobileSidebar";

export default function DashboardLayout() {

    const [

        collapsed,

        setCollapsed

    ] = useState(false);

    const [

        open,

        setOpen

    ] = useState(false);

    return (

        <div className="flex min-h-screen bg-slate-100 dark:bg-slate-950">

            <Sidebar

                collapsed={collapsed}

                setCollapsed={setCollapsed}

            />

            <MobileSidebar

                open={open}

                setOpen={setOpen}

            />

            <div className="flex flex-1 flex-col">

                <Navbar setOpen={setOpen} />

                <main className="flex-1 p-6">

                    <Outlet />

                </main>

            </div>

        </div>

    );

}