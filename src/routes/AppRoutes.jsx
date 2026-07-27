import { Routes, Route } from "react-router-dom";

import Login from "@/pages/auth/Login";
import Dashboard from "@/pages/dashboard/Dashboard";
import NotFound from "@/pages/NotFound";

import AppLayout from "@/layouts/AppLayout";
import ProtectedRoute from "./ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route element={<ProtectedRoute />}>
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}