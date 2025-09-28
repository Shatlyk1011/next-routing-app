import Link from "next/link"
import { getPosts } from "@/services/getPosts"

//components
import PostCard from "@/components/PostCard"
import Timer from "@/components/Timer"

// revalidate cache after 20 seconds
export const revalidate = 20

export default async function ISR() {
  const posts = await getPosts()

  return (
    <main className="h-svh w-full">
      <div className="relative px-10 py-2">
        <h1 className="mb-2 !p-0">Incremental Static Regeneration </h1>
        <p>
          Аннулировать кэш через{" "}
          <span>
            {" "}
            <Timer />
          </span>
          {" "}секунд
        </p>
      </div>
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
