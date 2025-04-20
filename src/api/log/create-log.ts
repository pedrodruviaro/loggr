import { addDoc, collection,  getDoc } from "firebase/firestore"

import type { Log, LogInput } from "@/entities/log"

import { db } from "@/lib/firebase"

export async function createLog({ userId, date, name, timeSpentInSeconds, yearMonth }: LogInput) {
  const docRef = await addDoc(collection(db, "logs"), {
    userId,
    date,
    name,
    timeSpentInSeconds,
    yearMonth,
  })

  const snapshot = await getDoc(docRef)
  const log = { id: docRef.id, ...snapshot.data() } as Log

  return log
}
