import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { action , original } from './urls'
import Navber from './components/Navbar/Navber'
import Banner from './components/Banner/Banner'
import RowPost from './components/Post/RowPost'

function App() {

  return (
    <>
    <div className='body'>
      <Navber />
      <Banner />
      <RowPost url={original} title = "Netflix Orginal" />
      <RowPost  url={action} title = "Action" isSmall = {true} />
      <RowPost  url={action} title = "Action" isSmall = {true} />
      </div>
    </>
  )
}

export default App
