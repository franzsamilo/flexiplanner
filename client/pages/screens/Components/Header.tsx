import React from 'react'
import Image from 'next/image'
import logo from '/public/assets/logo.png'
import academicsIcon from 'public/assets/icons/academics-icon.png'

function Header () {
  return (
    <header className='flex flex-row bg-main items-center'>
      <div>
        <div className='flex flex-row  ml-2'>
          <Image
            src={academicsIcon}
            alt='academics-icon'
            className='w-[50px] h-[60px]'
          />
          <div className='flex flex-col pt-2'>
            <div className='text-white  text-2xl font-bold pl-2'>Academics</div>
            <div className='flex flex-row justify-end mt-2 pb-1 text-sm'>
              <button className=' text-dirty font-medium px-3 mx-1 rounded-tl-md rounded-tr-md hover:bg-secondary'>
                Schedule
              </button>
              <button className=' text-white font-semibold px-3 mx-1 rounded-tl-md rounded-tr-md border-b-2 border-white hover:bg-secondary'>
                Tasks
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='ml-auto pr-2'>
        <Image src={logo} alt='logo' className='w-[60px]' />
      </div>
    </header>
  )
}
export default Header
