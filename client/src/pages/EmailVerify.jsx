import React from 'react'
import { assets } from '../assets/assets'

const EmailVerify = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-br
     from-blue-200 to-purple-400'>
      <img onClick={()=>navigate('/')} src={assets.logo} alt="" className='absolute
       left-5 sm:left-20 top-5 w-28 sm:w-32 cursor-pointer'/>
       <form className='bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm'>
        <h1 className='text-white text-2x1 font-semibold text-center mb-4'>Zweryfikuj Email OTP</h1>
        <p className='text-center mb-6 text-indigo-300'>Wprowadź 6-cyfrowy kod wysłany na adres email</p>
       </form>
     </div>
  )
}

export default EmailVerify