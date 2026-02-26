import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Menu from './pages/Menu'
import Rewards from './pages/Rewards'
import Giftcards from './pages/Giftcards'
import Signin from './pages/Signin'
import Joinnow from './pages/Joinnow'
import Home from './pages/Home'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/rewards' element={<Rewards />} />
      <Route path='/giftcards' element={<Giftcards />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/joinnow' element={<Joinnow />} />
      </Routes>
      <Footer />
      </BrowserRouter>
  )
}

export default App