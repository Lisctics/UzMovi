import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from "./Page/Home/index"

function App() {

  return (
    <>
      <Routes>
        <Route path='/' Component={Layout}>
          <Route path='/' Component={Home} />
        </Route>
      </Routes>
    </>
  )
}

export default App
