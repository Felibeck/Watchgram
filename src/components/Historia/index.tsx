import type { Usuario, usuarioHistoria } from "../../types/usuario"

const Historia = ({fotoPerfil, username}: usuarioHistoria) =>
{
    return (
        <>
        
        <img src={fotoPerfil} alt="FotoHistoria" />
        <p>{username}</p>
        
        </>
    )
}

export default Historia