import { createBrowserRouter, Navigate } from "react-router-dom"
import { LoginPage } from "@/pages/auth/login-page"
import { DashboardPage } from "@/pages/app/dashboard-page"
import { ProfilePage } from "@/pages/app/profile-page"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/auth/login" />,
  },
  {
    path: "/auth",
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "/app",
    children: [
      {
        index: true,
        element: <Navigate to="/app/dashboard" />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
    ],
  },
])
