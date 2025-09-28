import axios from "axios"

import { IPost } from "../shared/types"

export function getPosts(id: number): Promise<IPost>

export function getPosts(): Promise<IPost[]>

export async function getPosts(id?: number): Promise<IPost | IPost[]> {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id || ""}`)

  return data
}
