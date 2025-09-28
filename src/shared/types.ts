export interface IPost {
  userId: number
  id: number
  title: string
  body: string
}

export interface IContactForm {
  name: string
  email: string
  files?: File[]
}

export type FileTypes = "pdf" | "docx"

export interface ISessionForm {
  name: string
  email: string
  files: string[] | undefined
}
