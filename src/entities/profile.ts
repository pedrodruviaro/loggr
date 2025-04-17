export interface ProfileInput {
  bio?: string
  location?: string
  jobtitle?: string
  website?: string
}

export interface Profile extends ProfileInput {
  createdAt: string
  updatedAt: string
}
