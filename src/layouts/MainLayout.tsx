import React from 'react'
import Header from '../components/common/Header'
import { Outlet } from 'react-router'
import Footer from '../components/common/Footer'

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen justify-between'>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default MainLayout