import React from 'react'
import Image from 'next/image'
import logo from '/public/assets/logo.png'
import { useRouter } from 'next/router'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Navbar from '../Components/Navbar'

function Footer () {


  return (
      <footer className='bg-main text-white p-4 h-40'>
        <div className='flex justify-between'>
          <div className='flex items-start'>
            <div className='mr-2'>
              <Image src={logo} alt='' className='h-20 w-20 object-cover' />
            </div>
            <div className='overflow-wrap'>
              <span className='italic text-lg font-medium max-w-xs break-words'>
                About Us:
              </span>
              <h2 className='max-w-[40%]'>
                At the core of FlexiPlanner lies innovation by the Liberal
                Party, offering a flexible way to organize. Empowering through
                technology for a brighter, efficient tomorrow.
              </h2>
            </div>
          </div>
          <div className='flex flex-col justify-start ml-4'>
            <div className='mr-4'>
              <span className='italic text-lg font-medium'>Contact Us:</span>
              <h1 className='text-lg font-medium'>Feel free to reach out:</h1>
              <p>Email: liberalparty@gmail.com</p>
              <p>Contact Number: 09696969699</p>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer
