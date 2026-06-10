import type { PostType } from "../../types/post"
import './Post.css'

const Post = ({post}: {post: PostType}) => {
    return (
        <article className="post">
            {/* Info de usuario */}
            <div className="post-header">
                <img src={post.usuario.fotoPerfil} alt="userFoto" className="post-user-img" />
                <p className="post-username">{post.usuario.username}</p>
            </div>

            {/* Foto del post */}
            <img src={post.foto} alt="postFoto" className="post-image" />

            {/* Botones de acción */}
            <div className="post-actions">
                {/* Like */}
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>

                {/* Comentario + contador */}
                <div className="comment-action">
                  <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  <span className="comment-count">{post.comentarios?.length}</span>
                </div>

                {/* Share */}
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
            </div>

            {/* Likes */}
            <p className="post-likes">{post.cantLikes} likes</p>
        </article>
    )
}

export default Post