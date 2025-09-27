
import getPosts from "@/services/getPosts";

export default async function SSR() {

  const posts = await getPosts() 
  console.log('posts page', posts);
  return (
    <main className="h-svh w-full">
      ssr
    </main>
  );
}
