import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div>
        <img src={assets.logo} alt="" className='W-28 SM:W-32'></img>
        <button>Logowanie</button>
    </div>
  )
}

export default Navbar