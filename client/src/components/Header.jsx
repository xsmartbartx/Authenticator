import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex-col items-center justify-center text-center mt-32 mb-16'>
        <img src={assets.header_img} alt="" className='w-36 h-36 roinded-full mb-6'/>
        <h1 className='flex items-center gap-2 text-x2 sm:text-3x1 font-medium mb-2'>Cześć<img className='w-8 aspect-square' src={assets.hand_wave} alt=""/></h1>
        <h2>Witam w mojej aplikacji</h2>
        <p></p>
        <button>Zacznij</button>
    </div>
  )
}

export default Header