import { FC } from "react"
import { IPost } from "@/shared/types"

interface Props {
  post: IPost
}

const PostCard: FC<Props> = ({ post }) => {
  return (
    <div className="h-full w-full rounded-2xl bg-blue-300 p-5">
      <span className="mb-2 inline-block text-sm font-bold">Post id {post.id}</span>
      <h2 className="mb-2 text-2xl font-normal">{post.title}</h2>
      <p className="line-clamp-3 text-base leading-[140%]">{post.body}</p>
    </div>
  )
}
export default PostCard
