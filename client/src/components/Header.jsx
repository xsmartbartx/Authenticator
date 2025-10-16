import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div>
        <img src={assets.header_img} alt="" className='w-36 h-36 roinded-full mb-6'/>
        <h1>Witaj<img className='w-8 aspect-square' src={assets.hand_wave} alt=""/></h1>
    </div>
  )
}

export default Header