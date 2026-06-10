import type { Usuario } from "../../types/usuario"
import './Perfil.css'

const Perfil = ({ usuario }: { usuario: Usuario }) => {

    return (
        <section className="perfil">
            <header className="perfil-header">
                <img src={usuario.fotoPerfil} alt="userFoto" className="perfil-img" />
                <div className="perfil-info">
                    <h1 className="perfil-name">{usuario.nombreCompleto}</h1>
                    <h2 className="perfil-username">{usuario.username}</h2>
                    <p className="perfil-bio">{usuario.biografia}</p>
                    <div className="perfil-stats">
                        <span>{usuario.cantPublicaciones} publicaciones</span>
                        <span>{usuario.cantSeguidores} seguidores</span>
                        <span>{usuario.cantSeguidos} seguidos</span>
                    </div>
                </div>
            </header>

            <div className="perfil-actions">
                <button className="editar">Editar perfil</button>
            </div>

        </section>

    )

}

export default Perfil