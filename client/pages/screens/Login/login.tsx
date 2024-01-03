import React from 'react'
import Image from 'next/image'
import logo from '/public/assets/logo.png'
import { useRouter } from 'next/router'

function LoginPage () {
  const router = useRouter()

  function navigateToScheduler () {
    router.push('/screens/Scheduler/Scheduler')
  }
  function navigateToSignUp () {
    router.push('/screens/SignUp/SignUp')
  }

  return (
    <div className='flex flex-col min-h-screen bg-gradient-to-br from-dirty via-blue-100 to-main'>
      <main className='flex-1 flex items-center justify-center '>
        <div className='w-full max-w-xl px-6'>
          <div className='bg-white shadow-xl rounded-3xl px-8 py-10'>
            <div className='flex justify-center mb-4'>
              <Image src={logo} alt='Logo' className='h-16 w-16' />
            </div>
            <h2 className='text-2xl font-semibold text-center mb-4'>
              Welcome!
            </h2>
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
              <div className='mb-6 w-full '>
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
              <button
                type='submit'
                className='w-full bg-secondary hover:bg-main text-white font-bold py-2 px-4 rounded-3xl mb-6'
                onClick={navigateToScheduler}
              >
                Log in
              </button>
              <button
                type='submit'
                className='w-full bg-secondary hover:bg-main text-white font-bold py-2 px-4 rounded-3xl'
                onClick={navigateToScheduler}
              >
                Continue with Google
              </button>
            </form>
            <div className='mt-4 text-center'>
              <button
                className='text-main hover:underline cursor-pointer'
                onClick={navigateToSignUp}
              >
                Don&apos;t have an account?
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default LoginPage