import React from 'react'
import Image from 'next/image'
import logo from '/public/assets/logo.png'

function Login () {
  return (
    <div className='flex flex-col min-h-screen bg-dirty'>
      {/* Navbar */}
      <nav className='bg-white text-black p-4'>
        <div className='flex items-center justify-between'>
          {/* Logo and App Name */}
          <div className='flex items-center'>
            <Image src={logo} alt='' className='h-12 w-12 mr-2' />
            <span className='text-main text-2xl font-semibold'>
              FlexiPlanner
            </span>
          </div>
          {/* Centered Buttons */}
          <div className='flex justify-center text-xl mr-20'>
            <button className='px-10 py-2 bg-none font-semibold hover:text-main rounded-3xl'>
              Home
            </button>
            <button className='px-10 py-2 bg-none font-semibold hover:text-main rounded-3xl'>
              About Us
            </button>
            <button className='px-10 py-2 bg-none font-semibold hover:text-main rounded-3xl'>
              Demo
            </button>
          </div>
          {/* Sign Up Button */}
          <button className='px-4 py-2 bg-main hover:bg-secondary text-white font-semibold hover:bg-blue-600 rounded-3xl'>
            Sign Up
          </button>
        </div>
      </nav>

      {/* Login Content */}
      <main className='flex-1 flex items-center justify-center '>
        <div className='w-full max-w-md'>
          <div className='bg-white shadow-xl rounded-3xl px-9 pt-6 pb-8 mb-4'>
            <h2 className='flex justify-center text-2xl font-semibold mb-4'>
              Welcome!
            </h2>
            <form className='flex flex-col items-center'>
              <div className='mb-4 w-full'>
                <label
                  htmlFor='username'
                  className='block text-black text-sm font-bold mb-2'
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
              <div className='mb-6 w-full'>
                <label
                  htmlFor='password'
                  className='block text-gray-700 text-sm font-bold mb-2'
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
                className='w-4/5 flex justify-center bg-secondary hover:bg-main text-white font-bold py-2 px-4 rounded-3xl mb-6'
              >
                Log in
              </button>
              <button
                type='submit'
                className='w-4/5 flex justify-center bg-secondary hover:bg-main text-white font-bold py-2 px-4 rounded-3xl'
              >
                Continue with Google
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
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
    </div>
  )
}

export default Login
