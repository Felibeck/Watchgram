import { useState } from 'react'
import './App.css'
import Post from './components/Post'
import Historia from './components/Historia';
import SearchBar from './components/SearchBar';
import { Link } from 'react-router-dom';


function App() {



  const post = {
    foto:"public\fotoIgPruea.jpg", 
    cantLikes:5,
    comentarios: ["Muy bueno", "Gracias"],
    usuario: {
      username:"ilanBleicher",
      fotoPerfil:"public\fotoIgPruea.jpg"
    }
  };

  const usuario = 
  {
    username:"ilanBleicher",
    fotoPerfil:"public\fotoIgPruea.jpg"
  }

  return (
    <>
      <Link to="/profile">Perfil</Link>


      <SearchBar/>

      <Post post = {post}/>

      <Historia fotoPerfil = {usuario.fotoPerfil} username = {usuario.username} />

    </>
  )
}

export default App
