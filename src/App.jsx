import React, { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from "./Page/Home/index"
import Favorite from "./Page/Favorite films/index"
import { FavoriteContext } from './context/favorite'


function App() {
  const [favorite, setFavorite] = useState([])
  return (
    <FavoriteContext.Provider value={{favorite, setFavorite}}>
      <Routes>
        <Route path='/' Component={Layout}>
          <Route path='/' Component={Home} />
          <Route path='/favorite_films' Component={Favorite} />
        </Route>
      </Routes>
    </FavoriteContext.Provider>
  )
}

export default App
