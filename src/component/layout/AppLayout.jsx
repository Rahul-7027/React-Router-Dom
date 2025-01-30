import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../Navigation/Navbar'

const AppLayout = () => {
 const loading= useNavigation()
 console.log(222,loading)

 if(loading.state==="loading") return <>Loading.....</>
  return (
    <>
      <Navbar />
      {/* <Header /> */}
      <Outlet />
      {/* <Footer /> */}
    </>
  )
}

export default AppLayout
