import React from 'react'

const Login = () => {

    const [state, setState] = useState('Zapisz się')

  return (
    <div>
      <img src={assets.logo} alt="" className='absolute left-5 sm:left-20 top-5
       w-28 sm:w-32 cursor-pointer'/>
       <div>
        <h2>{state === 'Sign Up' ? 'Create account' : 'Login'}</h2>
        <p>{state === 'Sign Up' ? 'Create your account' : 'Login to your account!'}</p>

        <form>
          <div>
            <img src={assets.person_icon} alt="" />
            <input type="text" placeholder="Username" required/>
          </div>
        </form>
        
       </div>
    </div>
  )
}

export default Login