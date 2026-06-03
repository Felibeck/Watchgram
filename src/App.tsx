import { useState } from 'react'
import './App.css'
import Post from './components/Post'

function App() {
  const [count, setCount] = useState(0);
  const post = {
    foto:"public\fotoIgPruea.jpg", 
    cantLikes:5,
    comentarios: ["Muy bueno", "Gracias"]
  };
  const usuario = 
  {
    username:"ilanBleicher",
    fotoPerfil:"public\fotoIgPruea.jpg"
  }

  return (
    <>
      <Post post = {post} usuario = {usuario} />
    </>
  )
}

export default App
