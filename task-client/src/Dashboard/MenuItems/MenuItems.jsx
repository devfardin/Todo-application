import { NavLink } from 'react-router-dom'

const MenuItem = ({ label, address, icon: Icon }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-4 py-3 my-3  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
          isActive ? 'bg-gray-300 items-center text-xl border-r-[6px] border-purple-600 duration-300  text-neutral-600 rounded' : 'text-gray-300 bg-neutral-700 rounded text-xl border-r-6 font-medium items-center'
        }`
      }
    >
      <Icon className='w-5 h-5' />
      <span className='mx-3 font-medium'>{label}</span>
    </NavLink>
  )
}

export default MenuItem