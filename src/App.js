import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './components/About/About'
import CoinDetails from './components/CoinDetails/CoinDetails'
import Coins from './components/Coins/Coins'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Homepage from './components/Homepage/Homepage'
import BdAddress from './components/Contact/BdAddress'
import UsAddress from './components/Contact/UsAddress'


const App = () => {
  return (
    <div>
          <Header></Header>
        <Routes>
          <Route path='/' element={<Homepage></Homepage>}></Route>
          <Route path='/coin' element={<Coins></Coins>}></Route>
          <Route path='/coin-details/:id' element={<CoinDetails></CoinDetails>}></Route>
          <Route path='/contact' element={<Contact/>}>
            <Route path='bd-address' element={<BdAddress></BdAddress>}></Route>
            <Route path='us-address' element={<UsAddress></UsAddress>}></Route>
          </Route>
          <Route path='/about' element={<About></About>}></Route>
        </Routes>
          <Footer></Footer>
    </div>
    
  )
}

export default App
