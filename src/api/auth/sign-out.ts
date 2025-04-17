import { getAuth, signOut as signOutFirebase } from "firebase/auth"

export async function signOut() {
  const auth = getAuth()
  await signOutFirebase(auth)
}
