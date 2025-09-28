"use client"
import { useEffect, useState } from "react"

import { getPosts } from "@/services/getPosts"
import { IPost } from "@/shared/types"

import Link from "next/link"
import PostCard from "@/components/PostCard"

export default function CSR() {
  const [posts, setPosts] = useState<IPost[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPosts()
      setPosts(data)
    }
    fetchData()
  }, [])
  return (
    <main className="h-svh w-full">
      <h1>CSR Post Page</h1>
      <section className="grid grid-cols-4 gap-4 px-6 py-10 max-lg:grid-cols-3 max-md:grid-cols-2">
        {posts.length ? (
          posts.map((post) => (
            <Link className="inline-block w-full" key={post.id} href={`/ssg/${post.id}`}>
              <PostCard post={post} />
            </Link>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </section>
    </main>
  )
}
