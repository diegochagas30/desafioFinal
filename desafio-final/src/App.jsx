import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Menu from './Menu.jsx'
import Item from './Item.jsx'

function App() {

  return (
    <>
      <div id='main-container'>
        <div id='black'></div>
        <div id='container'>
          <Header/>
          <Menu/>
          <div id='titleContainer'>
            <div id='title'>#TÍTULO</div>
            <div id='album'>ÁLBUM</div>
            <span class="material-symbols-outlined" id='schedule'>schedule</span>
          </div>
          <span id='line'></span>
          <Item number='1' musicName="Talk" author="Coldplay" album="X&Y"/>  
        </div>
      </div>  
    </>
  )
}

export default App
