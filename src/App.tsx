import { useState, useEffect } from 'react'
import './App.css'
import Feed from './components/Feed'
import Historia from './components/Historia'
import SearchBar from './components/SearchBar'
import PostDetalleModal from './components/PostDetalleModal'
import { fetchFeed } from './services/unsplash'
import type { PostType } from './types/post'
import type { usuarioHistoria } from './types/usuario'
import { Link } from 'react-router-dom'

function App() {
  const [posts, setPosts] = useState<PostType[]>([])
  const [historias, setHistorias] = useState<usuarioHistoria[]>([])
  const [postSeleccionado, setPostSeleccionado] = useState<PostType | null>(null)

  useEffect(() => {
    fetchFeed(10, 'luxury watch').then((results) => {
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

    fetchFeed(5, 'person portrait').then((results) => {
      const mapped: usuarioHistoria[] = results.map((r: any) => ({
        username: r.user.username,
        fotoPerfil: r.user.profile_image.medium,
      }))
      setHistorias(mapped)
    })
  }, [])

  return (
    <>
      {/* Header */}
      <div className="header">
        <span className="logo">WatchGram</span>
        <SearchBar />
      </div>

      {/* Stories */}
      <div className="stories-container">
        <h3>STORÏES</h3>
        <div className="stories-list">
          {historias.map((h, i) => (
            <Historia key={i} fotoPerfil={h.fotoPerfil} username={h.username} />
          ))}
        </div>
      </div>

      {/* Info usuario principal + posts */}
      <div className="feed-layout">
        {posts[0] && (
          <div className="perfil-lateral">
            <Link to="/profile">
              <img src={posts[0].usuario.fotoPerfil} alt="perfil" />
              <p>{posts[0].usuario.nombreCompleto}</p>
              <span>{posts[0].usuario.username}</span>
            </Link>
          </div>
        )}

        <div>
          <h3>POSTS</h3>
          <Feed listaPosts={posts} onPostClick={setPostSeleccionado} />
        </div>
      </div>

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

export default App