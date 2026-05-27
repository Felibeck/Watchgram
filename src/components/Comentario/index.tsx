import type { Comentario } from "../../types/comentario"

const Comentario = ( {msj, cantLikes, username, fotoUser}: Comentario ) =>{
    return (
        <div className="comentario">
            <div className="user">
                <img src={fotoUser} alt="Foto de usuario" className="foto-user" />
                <p>{username}</p>
            </div>
            <p className="msj">{msj}</p>
            <span className="cantLikes">{cantLikes}</span>
        </div>
    )
}

export default Comentario;