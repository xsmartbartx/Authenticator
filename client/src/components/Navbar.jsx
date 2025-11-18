import React, { use } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AppContent } from '../context/AppContext'

const Navbar = () => {

    const navigate = useNavigate();
    const {userData, backendUrl, seyUserData, setIsLoggedin} = useContext
    (AppContent);

  return (
    <div className='w-full flex justify-between items-center p-4 sm:p-6 sm:px-24
    absolute top-0'>

      <img src={assets.logo} alt="" className='W-28 SM:W-32'></img>
    {userData ? 
    <div className='w-8 h-8 flex justify-center items-center rounded-full bg-black
    text-white relative group'>
      {userData.name[0].toUpperCase()}
      <div className='absolute hidden group-hover:block top-0 right-0 z-10
       text-black rounded pt-10'>
        <ul className='list-none m-0 p-2 bg-gray-100 text-sm'>
          <li className='py-1 px-2 hover:bg-gray-200
          cursor-pointer'>Zweryfikuj email</li>
          <li className='py-1 px-2 hover:bg-gray-200
          cursor-pointer'>Wyloguj</li>
        </ul>

       </div>
    </div>
    : <button onClick={()=>navigate('/login') }
      className='flex items-center gap-2 border border-gray-500 rounded-full
      px-6 py-2 text-gray-800 hover:bg-gray-100 transition-all'>Logowanie
      <img src={assets.arrow_icon} alt="" /></button>    
}
      </div>
  )
}

export default Navbar