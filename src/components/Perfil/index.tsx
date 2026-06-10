import './Perfil.css'
import type { Usuario } from "../../types/usuario"

const Perfil = ({ usuario }: { usuario: Usuario }) => {
    return (
        <div className="perfil">
            <div className="perfil-foto-wrapper">
                <img src={usuario.fotoPerfil} alt="userFoto" />
            </div>
            <div className="perfil-info">
                <div className="perfil-nombre">
                    {usuario.nombreCompleto}
                    {/* SVG verificado */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#4a9eff">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#4a9eff" strokeWidth="2" fill="none"/>
                    </svg>
                </div>
                <p className="perfil-username">@{usuario.username}</p>
                <p className="perfil-bio">{usuario.biografia}</p>
                <div className="perfil-stats">
                    <p><span>{usuario.cantSeguidores}</span> seguidores</p>
                    <p><span>{usuario.cantSeguidos}</span> seguidos</p>
                    <p><span>{usuario.cantPublicaciones}</span> posts</p>
                </div>
            </div>
        </div>
    )
}

export default Perfil