import { ThemeProvider } from "@/components/theme/theme-provider"
import { RouterProvider } from "react-router-dom"
import { router } from "@/routes"

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="loggr-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
