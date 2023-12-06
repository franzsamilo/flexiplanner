import React from 'react'
import Image from 'next/image'
import google from '../../../public/assets/icons/google.svg'
import { useRouter } from 'next/router'

function Login() {
  const router = useRouter()

  function navigateToHome() {
    router.push('/screens/Home/Home')
  }
  
  return (
    <div className='items-center justify-center flex'>
      <div className='flex flex-row'>
        <div className='mr-auto'>
        <Image src={google} alt='' className='h-16 w-16 rounded' />
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={navigateToHome}>
          Home
        </button>
        </div>
      </div>
    </div>
  )
}

export default Login
