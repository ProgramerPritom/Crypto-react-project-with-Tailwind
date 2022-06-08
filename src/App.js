import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './components/About/About'
import Coins from './components/Coins/Coins'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'
import Homepage from './components/Homepage/Homepage'


const App = () => {
  return (
    <div>
          <Header></Header>
        <Routes>
          <Route path='/' element={<Homepage></Homepage>}></Route>
          <Route path='/coin' element={<Coins></Coins>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/about' element={<About></About>}></Route>
        </Routes>
    </div>
    
  )
}

export default App
