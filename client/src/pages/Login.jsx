import React from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react'

const Login = () => {

    const [state, setState] = useState('Zapisz się')

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
          <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5
          rounded-full bg-[#333A5C]'>
            <img src={assets.person_icon} alt="" />
            <input className='bg-transparent outline-none' type="text" placeholder="Username" required/>
          </div>
        </form>

       </div>
    </div>
  )
}

export default Login