
import { getPosts } from "@/services/getPosts";

import PostCard from "@/components/PostCard";

export default async function SSR() {
  const posts = await getPosts() 

  console.log('posts page', posts);

  return (
    <main className="h-svh w-full">
      <section className="grid grid-cols-3">
        <h1>Single Post</h1>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>

    </main>
  );
}
