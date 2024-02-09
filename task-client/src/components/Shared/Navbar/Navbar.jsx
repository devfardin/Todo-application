import { Link } from 'react-router-dom'
import Container from '../Container'
import MenuDropdown from './MenuDropdown'

const Navbar = () => {
  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
            {/* Logo */}
            <Link className='flex items-center gap-3' to='/'>
              <img
                className='hidden md:block'
                src='https://einfosoft.com/templates/admin/kuber/source/light/assets/images/logo.png'
                alt='logo' width='40' height='40'/>
                <h1 className='text-2xl font-semibold text-heading'>kuber</h1>
            </Link>
            {/* Dropdown Menu */}
            <MenuDropdown />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar
