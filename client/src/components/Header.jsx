import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex-col items-center justify-center text-center mt-32 mb-16'>
        <img src={assets.header_img} alt="" className='w-36 h-36 roinded-full mb-6'/>

        <h1 className='flex items-center gap-2 text-x2 sm:text-3x1 font-medium mb-2'>
            Cześć<img className='w-8 aspect-square' src={assets.hand_wave} alt=""/></h1>

        <h2 className='text-3x1 sm:text-5x1 font-semibold mb-4'>Witam w mojej aplikacji</h2>

        <p className='mb-8 max-w-md'></p>

        <button className='border border-gray-500 rounded-full px-8 py-2.5
         hover:bg-gray-100 transition-all'>Zacznij</button>
    </div>
  )
}

export default Header