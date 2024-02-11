import React from 'react'
import useAuth from '../../hooks/useAuth'
const Logo = () => {
  const {user}=useAuth()
  console.log(user);
  return (
    <div>    
            <div className='flex items-center justify-center gap-3 mt-4'>
             <img className='w-20 h-20 object-cover rounded-full border-4 border-neutral-500' src={user?.photoURL} alt="" />
             <h1 className=' text-xl font-semibold text-neutral-100'>{user?.displayName}</h1>
            </div>
    </div>
  )
}

export default Logo