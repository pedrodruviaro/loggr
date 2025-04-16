import LoginPage from "@/pages/auth/login-page"
import { ThemeProvider } from "@/components/theme/theme-provider"

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="loggr-ui-theme">
      <LoginPage />
    </ThemeProvider>
  )
}
