import { AuthContext } from "@/contexts/auth-context"

export function useAuth() {
  return use(AuthContext)
}
