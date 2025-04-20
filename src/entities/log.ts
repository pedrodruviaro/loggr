
export type LogInput = {
  userId: string
  name: string
  timeSpentInSeconds: number
  date: string
  yearMonth: string // "2025-04"
}

export type Log = {
  id: string
} & LogInput
