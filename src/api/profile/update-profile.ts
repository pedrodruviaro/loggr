import { doc, setDoc } from "firebase/firestore"

import type { ProfileInput } from "@/entities/profile"

import { db } from "@/lib/firebase"

type UpdateProfileParams = {
  userId: string
} & ProfileInput

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
