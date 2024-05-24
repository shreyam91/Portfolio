import React from 'react'
import logo from '..//assets/logo.gif'

const Navbar = () => {
  return (
    <div className='w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodycolor px-4'>
        <div>
            <img src={logo} alt="" />
            {/* <h3> Nvbar</h3> */}
        </div>
        <div>

        </div>
    </div>
  )
}

export default Navbar