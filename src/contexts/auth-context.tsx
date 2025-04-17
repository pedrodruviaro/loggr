import { getAuth, onAuthStateChanged, User } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import type { ReactNode } from "react"

interface AuthContextType {
  user: User | null
  loading: boolean
}

interface AuthContextProviderProps {
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
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthContextProvider }
