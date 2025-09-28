import { getPosts } from "@/services/getPosts"

import PostCard from "@/components/PostCard"
import Link from "next/link"

export default async function SSG() {
  const posts = await getPosts()

  return (
    <main className="h-svh w-full">
      <h1>SSG Post Page</h1>
      <section className="grid grid-cols-4 gap-4 px-6 py-10 max-lg:grid-cols-3 max-md:grid-cols-2">
        {posts.map((post) => (
          <Link className="inline-block w-full" key={post.id} href={`/ssg/${post.id}`}>
            <PostCard post={post} />
          </Link>
        ))}
      </section>
    </main>
  )
}
