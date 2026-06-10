import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './components/SearchBar'
import Perfil from './components/Perfil'
import Feed from './components/Feed'
import PostDetalleModal from './components/PostDetalleModal'
import { fetchFeed } from './services/unsplash'
import type { PostType } from './types/post'
import type { Usuario } from './types/usuario'

const Profile = () => {
  const [usuario, setUsuario] = useState<Usuario | null>(null)
  const [posts, setPosts] = useState<PostType[]>([])
  const [postSeleccionado, setPostSeleccionado] = useState<PostType | null>(null)

  useEffect(() => {
    fetchFeed(1, 'person portrait').then((results) => {
      const r = results[0]
      setUsuario({
        nombreCompleto: r.user.name,
        username: r.user.username,
        fotoPerfil: r.user.profile_image.large,
        biografia: r.user.bio ?? '"Descubriéndome un poco más cada día"',
        cantPublicaciones: 8,
        cantSeguidores: r.user.followers_count ?? 125,
        cantSeguidos: r.user.following_count ?? 300,
      })
    })

    fetchFeed(5, 'luxury watch').then((results) => {
      const mapped: PostType[] = results.map((r: any) => ({
        foto: r.urls.regular,
        cantLikes: r.likes,
        comentarios: [],
        usuario: {
          username: r.user.username,
          fotoPerfil: r.user.profile_image.medium,
          nombreCompleto: r.user.name,
        },
      }))
      setPosts(mapped)
    })
  }, [])

  return (
    <>
      {/* Header */}
      <div className="header">
        <Link to="/" className="logo">WatchGram</Link>
        <SearchBar />
      </div>

      {/* Perfil */}
      {usuario && <Perfil usuario={usuario} />}

      {/* Posts */}
      <Feed listaPosts={posts} onPostClick={setPostSeleccionado} />

      {/* Modal */}
      {postSeleccionado && (
        <PostDetalleModal
          post={postSeleccionado}
          onClose={() => setPostSeleccionado(null)}
        />
      )}
    </>
  )
}

export default Profile