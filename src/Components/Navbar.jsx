import { HeartCircle } from 'iconsax-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' fixed  z-50 w-screen'>
      <div className=' px-20 p-4 bg-white'>
        <p className=' text-4xl font-unbonded font-bold'>Fuel<span className=' text-violet-800'>On.</span></p>
      </div>
      <div className=' flex items-center justify-between px-80 p-4 text-white bg-violet-950'>
        <Link to="">Home</Link>
        <Link to="Courses">Courses</Link>
        <input placeholder='Search' className=' rounded-full w-96 text-black' />
        <Link to="Like">Like</Link>
        <Link to="Profile">Profile</Link>
      </div>
    </div>
  )
}

export default Navbar