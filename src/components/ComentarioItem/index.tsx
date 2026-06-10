import type { Comentario } from "../../types/comentarioType"

const ComentarioItem = ( {msj, cantLikes, user}: Comentario) =>{
    return (
        <div className="comentario">
            <div className="user">
                <img src={user.fotoPerfil} alt="Foto de usuario" className="foto-user" />
                <p>{user.username}</p>
            </div>
            <p className="msj">{msj}</p>
            <span className="cantLikes">{cantLikes}</span>
        </div>
    )
}

export default ComentarioItem;