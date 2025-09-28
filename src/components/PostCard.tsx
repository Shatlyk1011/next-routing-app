import { FC } from "react"
import { IPost } from "@/shared/types"

interface Props {
  post: IPost
}

const PostCard: FC<Props> = ({ post }) => {
  return (
    <div className="h-full w-full max-w-sm rounded-2xl">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}
export default PostCard
