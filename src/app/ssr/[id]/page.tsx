
import PostCard from "@/components/PostCard";
import { getPosts } from "@/services/getPosts";

interface Props {
  params: Promise<{ id: string }>;
}
export default async function SSR({params}: Props) {
  const {id} = await params
  console.log('id', id);

  const post = await getPosts(1) 

  console.log('post page', post);

  return (
    <main className="h-svh w-full">
      <section className="grid grid-cols-3">
        <h1>Single Post</h1>
        <PostCard post={post}/>
      </section>
    </main>
  );
}
