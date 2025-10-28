import React from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react'

const Login = () => {

    const [state, setState] = useState('Zapisz się')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
    <div>
      <img src={assets.logo} alt="" className='absolute left-5 sm:left-20 top-5
       w-28 sm:w-32 cursor-pointer'/>
       <div className='bg-slate-900 p-10 rounded-lg shadow-lg w-full sm:w-96
       text-indigo-300 text-sm'>
        <h2 className='text-3x1 font-semibold text-white text-center mb-3'>
          {state === 'Sign Up' ? 'Create account' : 'Login'}</h2>

        <p className='text-center text-sm mb-6'>{state === 'Sign Up' ?
        'Create your account' : 'Login to your account!'}</p>

        <form>
          {state === 'Sign Up' && (
          <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5
          rounded-full bg-[#333A5C]'>
            <img src={assets.person_icon} alt="" />
            <input onChange={e => setName(e.target.value)} value={name}
            className='bg-transparent outline-none' type="text"
            placeholder="Username" required/>
          </div>
          )}

          <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5
          rounded-full bg-[#333A5C]'>
            <img src={assets.mail_icon} alt="" />
            <input onChange={e => setName(e.target.value)} value={email}
            className='bg-transparent outline-none' type="email"
            placeholder="Email id" required/>
          </div>
          <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5
          rounded-full bg-[#333A5C]'>
            <img src={assets.lock_icon} alt="" />
            <input onChange={e => setName(e.target.value)} value={password}
            className='bg-transparent outline-none' type="password"
            placeholder="Password" required/>
          </div>

          <p className='mb-4 text-indigo-500 cursor-pointer'>Forgot password?</p>

          <button className='w-full py-2.5 rounded-full bg-gradient-to-r from-indigo-500
           to-indigo-900'>{state}</button>
        </form>

           {state === 'Sign Up' ? (<p className='text-gray-400 text-center text-xs mt-4'>Masz już konto?{' '}
            <span onClick={()=> setState('Zaloguj się')} className='text-blue-400 cursor-pointer underline'>Zaloguj się</span></p>
            ) 
            : (
            <p className='text-gray-400 text-center text-xs mt-4'>Nie masz konta?{' '}
            <span onClick={()=> setState('Zapisz się')} className='text-blue-400 cursor-pointer underline'>Zarejestruj się</span></p>)}

          
       </div>
    </div>
  )
}

export default Login