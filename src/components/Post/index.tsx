import type { Post } from "../../types/post"

const Post = ( {foto, cantLikes}:Post) =>
{
    return (
        <>
            <img src={foto} alt="postFoto" />

            
            <p>{cantLikes}</p>
        </>
    )
}

export default Post