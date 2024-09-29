import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const RootPage = () => {
  return (
    <div className=' relative max-w-screen min-h-screen bg-slate-100'>
      <Navbar />
      <div className=' pt-40'>
      <Outlet />
      </div>
    </div>
  )
}

export default RootPage