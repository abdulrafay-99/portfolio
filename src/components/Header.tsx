import React from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className='container flex justify-between items-center my-4 '>
        <h1 className=' text-4xl font-semibold'>Rafay<span className='text-accent'>.</span></h1>
        <div className='hidden md:flex'>
            <Nav/>
            </div>
            <div className='md:hidden'><MobileNav/></div>
    </header>
  )
}

export default Header