import React from 'react'
import Header from '../components/common/Header'
import { Outlet } from 'react-router'
import Footer from '../components/common/Footer'

const MainLayout = () => {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default MainLayout