import { createBrowserRouter, Navigate } from "react-router-dom"
import { LoginPage } from "@/pages/auth/login-page"
import { DashboardPage } from "@/pages/app/dashboard-page"
import { ProfilePage } from "@/pages/app/profile-page"
import { PublicOnlyRoute } from "@/components/public-only-route"
import { ProtectedRoute } from "@/components/protected-route"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/auth/login" />,
  },
  // public-only
  {
    element: <PublicOnlyRoute />,
    children: [
      {
        path: "/auth",
        children: [
          {
            path: "login",
            element: <LoginPage />,
          },
        ],
      },
    ],
  },

  // protect-routes
  {
    element: <ProtectedRoute />,
    children: [
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
    ],
  },
])
