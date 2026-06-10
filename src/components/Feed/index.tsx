import type { PostType } from "../../types/post"
import Post from "../Post"

const Feed = ({ listaPosts, onPostClick }: { listaPosts: PostType[], onPostClick: (post: PostType) => void }) => {
  return (
    <>
      {listaPosts.map((post, i) => (
        <div key={i} onClick={() => onPostClick(post)} style={{ cursor: 'pointer' }}>
          <Post post={post} />
        </div>
      ))}
    </>
  )
}

export default Feed