import React from 'react'

const Login = () => {

    const [state, setState] = useState('Zapisz się')

  return (
    <div>
      <img src={assets.logo} alt="" className='absolute left-5 sm:left-20 top-5
       w-28 sm:w-32 cursor-pointer'/>
       <div>
        <h2 className='text-3x1 sm:text-5x1 font-semibold mb-4'>Zaloguj się do swojego konta</h1>
       </div>
    </div>
  )
}

export default Login