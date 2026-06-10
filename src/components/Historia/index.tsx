import type { Usuario, usuarioHistoria } from "../../types/usuario"

const Historia = ({fotoPerfil, username}: usuarioHistoria) =>
{
    return (
        <div className="historia">
            <img src={fotoPerfil} alt="FotoHistoria" className="historia-img" />
            <p className="historia-username">{username}</p>
        </div>
    )
}

export default Historia