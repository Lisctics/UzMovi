import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from "./Page/Home/index"
import Favorite from "./Page/Favorite films/index"

function App() {

  return (
    <>
      <Routes>
        <Route path='/' Component={Layout}>
          <Route path='/' Component={Home} />
          <Route path='/favorite_films' Component={Favorite} />
        </Route>
      </Routes>
    </>
  )
}

export default App
