import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div className='w-full flex justify-between items-center p-4 sm:p-6 sm:px-24'>
        <img src={assets.logo} alt="" className='W-28 SM:W-32'></img>
        <button>Logowanie</button>
    </div>
  )
}

export default Navbar