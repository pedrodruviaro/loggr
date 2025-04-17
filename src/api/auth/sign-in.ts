import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

export async function signIn() {
  const auth = getAuth()
  const provider = new GoogleAuthProvider()
  const response = await signInWithPopup(auth, provider)
  return response
}
