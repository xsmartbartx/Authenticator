import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div>
        <img src={assets.header_img} alt="" className='w-36 h-36 roinded-full mb-6'/>
        <h1>Cześć<img className='w-8 aspect-square' src={assets.hand_wave} alt=""/></h1>
        <h2>Witam w mojej aplikacji</h2>
        <p></p>
    </div>
  )
}

export default Header