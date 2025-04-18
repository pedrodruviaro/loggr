export type LogInput = {
  userId: string
  name: string
  timeSpentInSeconds: number
  date: string
  // date: Timestamp
  yearMonth: string // "2025-04"
}

export type Log = {
  id: string
  createdAt: string
  updatedAt: string
} & LogInput
