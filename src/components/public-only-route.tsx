import { Navigate, Outlet } from "react-router-dom"

import { SplashScreen } from "@/components/splash-screen"
import { useAuth } from "@/hooks/use-auth"

export function PublicOnlyRoute() {
  const { user, loading } = useAuth()

  if (loading)
    return <SplashScreen />

  return user ? <Navigate to="/app" replace /> : <Outlet />
}
