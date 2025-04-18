export type ProfileInput = {
  bio?: string
  location?: string
  jobtitle?: string
  website?: string
}

export type Profile = {
  createdAt: string
  updatedAt: string
} & ProfileInput
