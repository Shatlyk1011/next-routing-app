import PostCard from "@/components/PostCard"
import { getPosts } from "@/services/getPosts"

export async function generateStaticParams() {
  const posts = await getPosts()

  return posts.map((post) => ({ id: post.id }))
}

export default async function SSG({ params }: { params: { id: string } }) {
  const post = await getPosts(+params.id)

  return (
    <main className="h-svh w-full">
      <h1>SSG Post Sample</h1>
      <section className="grid grid-cols-4 gap-4 px-6 py-10 max-lg:grid-cols-3 max-md:grid-cols-2">
        <PostCard post={post} />
      </section>
    </main>
  )
}
