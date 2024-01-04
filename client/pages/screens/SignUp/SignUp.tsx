import React from 'react'
import Image from 'next/image'
import logo from '/public/assets/logo.png'
import useNavigation from '../Components/Navigation'

function SignUpPage () {
  const { ToLogin, ToHome } = useNavigation()

  return (
    <div className='flex flex-col min-h-screen bg-gradient-to-br from-dirty via-blue-100 to-main'>
      <main className='flex-1 flex items-center justify-center'>
        <div className='w-full max-w-2xl px-8'>
          <div className='bg-white shadow-xl rounded-3xl px-8 py-10'>
            <div className='flex justify-center mb-4'>
              <button onClick={ToHome}>
                <Image src={logo} alt='Logo' className='h-16 w-16' />
              </button>
            </div>
            <h2 className='text-2xl font-semibold text-center mb-4'>Sign Up</h2>
            <form className='flex flex-col items-center'>
              <div className='mb-4 w-full'>
                <label
                  htmlFor='username'
                  className='block text-black text-md font-bold mb-2'
                >
                  Username
                </label>
                <input
                  type='text'
                  id='username'
                  placeholder='Enter your username'
                  className='shadow appearance-lg rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                />
              </div>
              <div className='mb-4 w-full'>
                <label
                  htmlFor='email'
                  className='block text-black text-md font-bold mb-2'
                >
                  Email
                </label>
                <input
                  type='text'
                  id='email'
                  placeholder='Enter your Email'
                  className='shadow appearance-lg rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                />
              </div>
              <div className='mb-4 w-full'>
                <label
                  htmlFor='password'
                  className='block text-gray-700 text-md font-bold mb-2'
                >
                  Password
                </label>
                <input
                  type='password'
                  id='password'
                  placeholder='Enter your password'
                  className='shadow appearance-lg  rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                />
              </div>
              <div className='mb-6 w-full'>
                <label
                  htmlFor='confirmPassword'
                  className='block text-gray-700 text-md font-bold mb-2'
                >
                  Confirm Password
                </label>
                <input
                  type='password'
                  id='confirmPassword'
                  placeholder='Confirm your password'
                  className='shadow appearance-lg  rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                />
              </div>
              <button
                type='submit'
                className='w-full bg-secondary hover:bg-main text-white font-bold py-2 px-4 rounded-3xl mb-6'
                onClick={ToLogin}
              >
                Sign Up
              </button>
              <div className='mt-4 text-center'>
                <button
                  className='text-main hover:underline cursor-pointer'
                  onClick={ToLogin}
                >
                  Already have an account?
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

export default SignUpPage
