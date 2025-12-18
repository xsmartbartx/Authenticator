import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const ResetPassword = () => {

  const navigate = useNavigate();

  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-br
     from-blue-200 to-purple-400'>
      <img onClick={()=>navigate('/')} src={assets.logo} alt="" className='absolute
        left-5 sm:left-20 top-5 w-28 sm:w-32 cursor-pointer'/>

{/* wprowadz email id */}
      <form className='bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm'>
        <h1 className='text-white text-2xl font-semibold text-center mb-4'>Zresetuj
        hasło</h1>
        <p className='text-center mb-6 text-indigo-300'>Wprowadź zarejestrowany adres
        email</p>
        <div className=''>
          <img src="" alt="" />
          <input type="email" />
        </div>
      </form>
     </div>
  )
}

export default ResetPassword