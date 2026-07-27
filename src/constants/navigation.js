import {
    FaHome,
    FaFolderOpen,
    FaTasks,
    FaUsers,
    FaBell,
    FaUserCircle,
    FaCog,
} from "react-icons/fa";

export const navigation = [
    {
        name: "Dashboard",
        path: "/dashboard",
        icon: FaHome,
    },
    {
        name: "Projects",
        path: "/projects",
        icon: FaFolderOpen,
    },
    {
        name: "Tasks",
        path: "/tasks",
        icon: FaTasks,
    },
    {
        name: "Teams",
        path: "/teams",
        icon: FaUsers,
    },
    {
        name: "Notifications",
        path: "/notifications",
        icon: FaBell,
    },
    {
        name: "Profile",
        path: "/profile",
        icon: FaUserCircle,
    },
    {
        name: "Settings",
        path: "/settings",
        icon: FaCog,
    },
];