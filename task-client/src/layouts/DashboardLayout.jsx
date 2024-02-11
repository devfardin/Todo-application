import { Outlet } from 'react-router-dom'
import Sidebar from '../Dashboard/Sidebar/Sidebar'

const DashboardLayout = () => {
  return (
    <div className='relative min-h-screen md:flex '>
      {/* Sidebar Component */}
      <Sidebar />
      <div className='flex-1  md:ml-[300px] px-3  md:px-4 lg:px-8  overflow-auto w-full h- bg-neutral-800 rounded-md shadow-xl ml-5 border border-neutral-800 mt-5 mr-5 mb-5'>
        <div className='py-8'>
          {/* Outlet for dynamic contents */}
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout