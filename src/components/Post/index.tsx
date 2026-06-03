import type { Post, PostPropsType } from "../../types/post"

const Post = ({post, usuario} : PostPropsType) =>
{
    return (
        <>
{/* foto/s post */}
            <img src={post.foto} alt="postFoto" />

{/* info de usuario */}
            <img src={usuario.fotoPerfil} alt="userFoto" />
            <p>{usuario.username}</p>
            
{/* botones de accion */}
            <div>

            {/* falta svg corazon */}
            <p>{post.cantLikes}</p>

            {/* falta svg comentario */}
            <p>{post.comentarios.length}</p>

            {/* falta svg share */}
                
            </div>
        </>
    )
}

export default Post