import { ProfileInput } from "@/entities/profile"
import { db } from "@/lib/firebase"
import { doc, setDoc } from "firebase/firestore"

interface UpdateProfileParams extends ProfileInput {
  userId: string
}

export async function updateProfile({
  userId,
  bio,
  jobtitle,
  location,
  website,
}: UpdateProfileParams) {
  await setDoc(doc(db, "profiles", userId), {
    bio,
    jobtitle,
    location,
    website,
  })
}
