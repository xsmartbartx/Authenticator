import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const ResetPassword = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');

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
        <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5
        rounded-full bg-[#333A5C]'>
          <img src={assets.email_icon} alt="" className='w-3 h-3' />
          <input type="email" placeholder='Email id'
          className='bg-transparent outline-none text-white'
          value={email} onChange={e => setEmail(e.target)} required/>
        </div>
        <button className='w-full py-2.5 bg-gradient-to-r from-indigo-500
         to-indigo-900 text-white rounded-full mt-3'></button>
      </form>

{/* form wprowadzenia otp */}

<form onSubmit={onSubmitHandler} className='bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm'>
        <h1 className='text-white text-2x1 font-semibold text-center mb-4'>
          Zweryfikuj Email OTP</h1>
        <p className='text-center mb-6 text-indigo-300'>
          Wprowadź 6-cyfrowy kod wysłany na adres email</p>
        <div className='flex justify-between mb-8' onPaste={handlePaste}>
          {Array(6).fill(0).map((_, index) =>(
            <input type="text" maxLength='1' key={index} required
            className='w-12 h-12 bg-[#333A5C] text-white text-center text-xl
             rounded-md'
             ref={e => inputRefs.current[index] = e}
             onInput={(e) => handleInput(e, index) }
             onKeyDown{(e) => handleKeyDown(e, index)}
             />
          ))}
        </div>
        <button className='w-full py-3 bg-gradient-to-r from-indigo-500
        to-indigo-900 text-white rounded-full'>Zweryfikuj email</button>
       </form>
     </div>
  )
}

export default ResetPassword