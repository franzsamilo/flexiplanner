import React, { useState } from 'react';
import Image from 'next/image';
import logo from '/public/assets/logo.png';
import useNavigation from '../Components/Navigation';

function Navbar() {
  const { ToHome, ToAboutUs, ToDemo, ToLogin } = useNavigation();
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleButtonClick = (buttonName: string, navigateFunction: any) => {
    setActiveButton(buttonName); // Set the clicked button as active
    switch (buttonName) {
      case 'home':
        navigateFunction(ToHome);
        break;
      case 'aboutUs':
        navigateFunction(ToAboutUs);
        break;
      case 'demo':
        navigateFunction(ToDemo);
        break;
      default:
        navigateFunction(ToLogin);
    }
  };

  return (
    <nav className='bg-white text-black p-4'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <Image src={logo} alt='' className='h-12 w-12 mr-2' />
          <span className='text-main text-2xl font-semibold'>FlexiPlanner</span>
        </div>
        <div className='flex justify-center text-xl mr-20'>
          <button
            className={`px-10 py-2 rounded-full font-semibold ${
              activeButton === 'home' ? 'bg-main text-white' : 'bg-none hover:text-secondary'
            }`}
            onClick={() => handleButtonClick('home', ToHome)}
          >
            Home
          </button>
          <button
            className={`px-10 py-2 rounded-3xl font-semibold ${
              activeButton === 'aboutUs' ? 'bg-main text-white' : 'bg-none hover:text-secondary'
            }`}
            onClick={() => handleButtonClick('aboutUs', ToAboutUs)}
          >
            About Us
          </button>
          <button
            className={`px-10 py-2 rounded-3xl font-semibold ${
              activeButton === 'demo' ? 'bg-main text-white' : 'bg-none hover:text-secondary'
            }`}
            onClick={() => handleButtonClick('demo', ToDemo)}
          >
            Demo
          </button>
        </div>
        <button
          className='px-4 py-2 bg-main hover:bg-secondary text-white font-semibold rounded-3xl'
          onClick={() => handleButtonClick('login', ToLogin)}
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
