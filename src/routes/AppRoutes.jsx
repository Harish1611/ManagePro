import { Routes, Route } from "react-router-dom";

import Login from "@/pages/auth/Login";
import Dashboard from "@/pages/dashboard/Dashboard";
import NotFound from "@/pages/NotFound";

import AppLayout from "@/layouts/AppLayout";
import DashboardLayout from "@/layouts/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";
import Register from "@/pages/auth/Register";
import Projects from "@/pages/projects/Projects";
import Tasks from "@/pages/tasks/Tasks";
import Teams from "@/pages/teams/Teams";
import Notifications from "@/pages/notifications/Notifications";
import Settings from "@/pages/settings/Settings";
import Profile from "@/pages/profile/Profile";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
    path="/register"
    element={<Register />}
/>

     <Route element={<ProtectedRoute />}>

    <Route element={<DashboardLayout />}>

        <Route
            path="/dashboard"
            element={<Dashboard />}
        />

        <Route
            path="/projects"
            element={<Projects />}
        />

        <Route
            path="/tasks"
            element={<Tasks />}
        />

        <Route
            path="/teams"
            element={<Teams />}
        />

        <Route
            path="/notifications"
            element={<Notifications />}
        />

        <Route
            path="/settings"
            element={<Settings />}
        />

        <Route
    path="/profile"
    element={<Profile />}
/>

    </Route>

</Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}