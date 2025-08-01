import { use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/header'
import Signup from './Components/signup'
import { Route, Routes } from 'react-router-dom'
import Signin from './Components/signin'
import Dashboard from './pages/dashboard-page'
import Footer from './Components/footer'
import Mobheader from './Components/moblieheader'
import ResponsiveNavbar from './Components/responsivenavbar'

function App() {
 

  return (
    <>
      <ResponsiveNavbar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/sign-up' element={<Signup/>}/>
        <Route path='/sign-in' element={<Signin/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
