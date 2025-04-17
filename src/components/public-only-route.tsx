import { useAuth } from "@/hooks/use-auth"
import { Navigate, Outlet } from "react-router-dom"
import { SplashScreen } from "@/components/splash-screen"

export function PublicOnlyRoute() {
  const { user, loading } = useAuth()

  if (loading) return <SplashScreen />

  return user ? <Navigate to="/app" replace /> : <Outlet />
}
