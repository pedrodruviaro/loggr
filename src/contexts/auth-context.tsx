import type { User } from "firebase/auth"
import type { ReactNode } from "react"

import { getAuth, onAuthStateChanged } from "firebase/auth"
import { createContext, useEffect, useMemo, useState } from "react"

type AuthContextType = {
  user: User | null
  loading: boolean
}

type AuthContextProviderProps = {
  children: ReactNode
}

const AuthContext = createContext<AuthContextType>({
  loading: true,
  user: null,
})

function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  const auth = getAuth()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [auth])

  return (
    <AuthContext value={useMemo(() => ({ user, loading }), [user, loading])}>
      {children}
    </AuthContext>
  )
}

export { AuthContext, AuthContextProvider }
