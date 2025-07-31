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
  // const ResponsiveNavbar = () => {
  //   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  //   useEffect(() => {
  //     const handleResize = () => {
  //       setIsMobile(window.innerWidth < 768);
  //     };
      
  //     window.addEventListener('resize', handleResize);

  //     return () => {
  //       window.removeEventListener('resize', handleResize);
  //     };
  //   }, []);

  //   return(
  //     <>
  //       {isMobile ? <Mobheader/> : <Header/>}
  //     </>
  //   );
  // };


  // export default ResponsiveNavbar;

  return (
    <>
      {/* <Header/>
      <Mobheader/> */}
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
