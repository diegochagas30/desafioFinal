import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Menu from './Menu.jsx'

function App() {

  return (
    <>
      <div id='main-container'>
        <div id='black'></div>
        <div id='container'>
          <Header/>
          <Menu/>
        </div>
      </div>  
    </>
  )
}

export default App
