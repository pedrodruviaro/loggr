import { ThemeProvider } from "@/components/theme/theme-provider"
import { RouterProvider } from "react-router-dom"
import { router } from "@/routes"
import { queryClient } from "@/lib/query-client"
import { QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "@/components/ui/sonner"
import { AuthContextProvider } from "@/contexts/auth-context"

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="loggr-ui-theme">
        <AuthContextProvider>
          <RouterProvider router={router} />
          <Toaster richColors={true} />
        </AuthContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
