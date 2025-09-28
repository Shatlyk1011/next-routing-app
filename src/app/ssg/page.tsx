import { getPosts } from "@/services/getPosts"

export async function generateStaticParams() {
  const posts = await getPosts()

  return posts.map((post) => ({ id: post.id }))
}
// @ts-expect-error temporary
export default async function StaticGeneration({ params }) {
  console.log("SSG PARAMS", params)
  return (
    <main className="h-svh w-full">
      <section className="grid grid-cols-3"></section>
    </main>
  )
}
