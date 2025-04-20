import { Log } from "@/entities/log";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

interface GetLogsParams  {
userId: string
month: string
year: string
}

export async function getLogs({ userId, month, year }: GetLogsParams) {
    const selectedYearMonth = `${year}-${month}`

const logsRef = collection(db, 'logs')
const q = query(logsRef, where("userId", "==", userId), where('yearMonth', '==', selectedYearMonth))
const snapshot = await getDocs(q)
const logs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data()} as Log))

return logs
}
