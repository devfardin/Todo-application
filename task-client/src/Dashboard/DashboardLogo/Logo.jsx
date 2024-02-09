import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div>
        <Link className='flex items-center gap-3' to='/'>
              <img
                className='hidden md:block'
                src='https://einfosoft.com/templates/admin/kuber/source/light/assets/images/logo.png'
                alt='logo' width='40' height='40'/>
                <h1 className='text-2xl font-semibold text-heading'>kuber</h1>
            </Link>
    </div>
  )
}

export default Logo