import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { AiOutlineBars } from 'react-icons/ai'
import { FaPlus } from "react-icons/fa6";
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import Logo from '../DashboardLogo/Logo'
import MenuItem from '../MenuItems/MenuItems';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';
import { FaTasks } from "react-icons/fa";
import { MdAddTask } from "react-icons/md";
import SubmitTask from '../../components/Shared/SubmitTask';
import { GiSandsOfTime } from "react-icons/gi";
import { IoCloseCircleOutline } from "react-icons/io5";
const Sidebar = () => {
  const [isActive, setActive] = useState(false)
  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate()
  const { logOut } = useAuth()
  const handleToggle = () => {
    setActive(!isActive)
  }
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success('LogOut successfull')
        navigate('/')
      })
      .catch((error) => {
        toast.error(error?.message)
      })
  }
  return (
    <div className=''>
      <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
            <Logo />
          </div>
        </div>
        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between bg-neutral-800 rounded-md shadow-xl ml-3 border border-neutral-800 mt-4 mb-4 mr-4 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform  ${isActive && '-translate-x-full'
          }  md:translate-x-0  transition duration-200 ease-in-out`} >
        <div>
          <div>
            <div>
              {/* Dashboard name */}
              <Logo />

            </div>
          </div>
          {/* Nav Items */}

          <div className='flex flex-col justify-between  mt-6'>
            <nav>

              <MenuItem
                icon={FaTasks}
                label='All Task'
                address='my-task' />

              <MenuItem
                icon={MdAddTask}
                label='Completed'
                address='complete-task' />
              <MenuItem
                icon={GiSandsOfTime}
                label='Process'
                address='process-task' />
              <MenuItem
                icon={IoCloseCircleOutline}
                label='Close'
                address='close-task' />
            </nav>

          </div>
          
         <div className='absolute to-10 left-0 '>
         <SubmitTask openModal={openModal} setOpenModal={setOpenModal}> </SubmitTask>

         </div>
  


        </div>
        <div>

          <button onClick={handleLogOut} className='flex w-full 
          items-center border-r-[6px] border-neutral-700 hover:border-purple-600 duration-300   
          px-4 py-3 mt-5  hover:bg-gray-300 hover:text-neutral-600   text-gray-300 bg-neutral-700 rounded text-xl border-r-6 font-medium'>
            <GrLogout className='w-5 h-5 !text-neutral-100' />
            <span className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar