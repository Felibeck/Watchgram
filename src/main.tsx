import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "react-router-dom"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from './Profile.tsx'

createRoot(document.getElementById('root')!).render(
  
  <BrowserRouter>

    <Routes>

    <Route path="/" element={<App/>}></Route>
    <Route path="/profile" element={<Profile/>}></Route>


    </Routes>
  </BrowserRouter>
)
