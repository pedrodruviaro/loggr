import { ProfileInput } from "@/entities/profile"
import { db } from "@/lib/firebase"
import { doc, getDoc } from "firebase/firestore"

interface GetProfileParams {
  userId: string
}

export async function getProfile({ userId }: GetProfileParams) {
  const docRef = doc(db, "profiles", userId)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    return docSnap.data() as ProfileInput
  }

  return null
}
