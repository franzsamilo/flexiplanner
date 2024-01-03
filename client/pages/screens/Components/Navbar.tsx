import React from 'react'
import Image from 'next/image'
import logo from '/public/assets/logo.png'
import useNavigation from '../Components/Navigation'

function Navbar () {
    const { ToHome, ToAboutUs, ToDemo, ToLogin } = useNavigation()
  return (
      <nav className='bg-white text-black p-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <Image src={logo} alt='' className='h-12 w-12 mr-2' />
            <span className='text-main text-2xl font-semibold'>
              FlexiPlanner
            </span>
          </div>
          <div className='flex justify-center text-xl mr-20'>
            <button
              className='px-10 py-2 bg-main rounded-full font-semibold hover:text-dirty text-white'
              onClick={ToHome}
              
            >
              Home
            </button>
            <button
              className='px-10 py-2 bg-none font-semibold hover:text-main rounded-3xl'
              onClick={ToAboutUs}
            >
              About Us
            </button>
            <button
              className='px-10 py-2 bg-none font-semibold hover:text-main rounded-3xl'
              onClick={ToDemo}
            >
              Demo
            </button>
          </div>
          <button
            className='px-4 py-2 bg-main hover:bg-main text-white font-semibold rounded-3xl'
            onClick={ToLogin}
          >
            Sign Up
          </button>
        </div>
      </nav>
  )
}
export default Navbar

