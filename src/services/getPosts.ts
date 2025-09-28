import axios from "axios"

import { IPost } from "../shared/types";

export function getPosts(id: number): Promise<IPost>;

export function getPosts(): Promise<IPost[]>;

export async function getPosts(id?: number): Promise<IPost | IPost[]> {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id || ""}`);
  const data = response.data;

  console.log("getPosts", data);

  return data;
}