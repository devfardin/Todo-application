import { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import avatarImg from '../../../assets/images/placeholder.jpg'

const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logOut } = useAuth()
  const handleLogOut = () => {
    logOut()
      .then(() => {
        setTimeout(() => {
          toast.success('LogOut successfull')
          window.location.reload()
        }, 1000);
      })
      .catch((error) => {
        toast.error(error?.message)
      })
  }

  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='md:py-1 md:px-2  flex flex-row items-center gap-3 rounded-full cursor-pointer'>
          <div className=' md:block'>
            <img
              className='rounded-full'
              referrerPolicy='no-referrer'
              src={user && user.photoURL ? user.photoURL : avatarImg}
              alt='profile'
              height='40'
              width='40'
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
          <div className='flex flex-col cursor-pointer'>
            {
              user ? <>
                <a href='/dashboard'
                  className='px-4 pt-3 pb-2 hover:bg-neutral-100  text-center transition font-medium text-base'>
                  Dashboard
                </a>
                <button onClick={handleLogOut}
                  className='px-4 pb-3 text-center text-lg hover:bg-neutral-100 transition font-medium' >
                  Logout
                </button>
              </> :
                <>
                  <a href='/login'
                    className='px-4 py-2 hover:bg-neutral-100 transition font-semibold text-base'>
                    Login
                  </a>
                  <a href='/signup'
                    className='px-4 py-2 hover:bg-neutral-100 transition font-semibold text-base'
                  >
                    Sign Up
                  </a>
                </>
            }
          </div>
        </div>
      )}
    </div>
  )
}

export default MenuDropdown
