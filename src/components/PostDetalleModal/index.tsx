import type { PostType } from "../../types/post"
import ComentarioItem from "../ComentarioItem"
import type { Comentario } from "../../types/comentarioType"

const comentariosFicticios: Comentario[] = [
  { msj: '¡Muy bueno!', cantLikes: 5, user: { username: 'user_name', fotoPerfil: '' } },
  { msj: '¡Muy bueno!', cantLikes: 5, user: { username: 'user_name', fotoPerfil: '' } },
  { msj: '¡Muy bueno!', cantLikes: 5, user: { username: 'user_name', fotoPerfil: '' } },
  { msj: '¡Buen ángulo!', cantLikes: 5, user: { username: 'user_name', fotoPerfil: '' } },
]

const PostDetalleModal = ({ post, onClose }: { post: PostType, onClose: () => void }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
        <button className="modal-cerrar" onClick={onClose}>✕</button>

        <div className="modal-header">
          <img src={post.usuario.fotoPerfil} alt="perfil" />
          <span>@{post.usuario.username}</span>
        </div>

        <div className="modal-body">
          <img src={post.foto} alt="post" className="modal-foto" />

          <div className="modal-comentarios">
            {comentariosFicticios.map((c, i) => (
              <ComentarioItem key={i} msj={c.msj} cantLikes={c.cantLikes} user={c.user} />
            ))}
            <textarea placeholder="Escribe aquí tu comentario..." />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostDetalleModal