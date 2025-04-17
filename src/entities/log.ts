export interface LogInput {
  userId: string
  name: string
  timeSpentInSeconds: number
  date: string
  // date: Timestamp
  yearMonth: string // "2025-04"
}

export interface Log extends LogInput {
  id: string
  createdAt: string
  updatedAt: string
}
