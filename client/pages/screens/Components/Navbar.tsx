import React, { useState } from 'react';
import Image from 'next/image';
import logo from '/public/assets/logo.png';
import useNavigation from './Navigation';

function Navbar() {
  const { ToHome, ToAboutUs, ToDemo, ToLogin } = useNavigation();
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleButtonClick = (buttonName: string, navigateFunction: any) => {
    setActiveButton(buttonName);
    navigateFunction();
  };

  return (
    <nav className="bg-white text-black p-4 xs:max-lg:m-0 xs:max-sm:p-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src={logo}
            alt=""
            className="h-12 w-12 mr-2 xs:max-md:h-10 xs:max-md:w-10"
          />
          <span className="text-main text-2xl font-semibold xs:max-md:hidden">
            FlexiPlanner
          </span>
        </div>
        <div className="flex justify-center text-xl mr-20 xs:max-sm:text-sm xs:max-sm:mr-1 sm:max-lg:mr-8 sm:max-lg:ml-5">
          <button
            className={`px-10 py-2 rounded-full font-semibold hover:text-main`}
            onClick={() => handleButtonClick('home', ToHome)}
          >
            Home
          </button>

          <button
            className={`px-10 py-2 font-semibold rounded-full hover:text-main xs:max-sm:px-3 xs:max-lg:py-1 sm:max-lg:px-7`}
            onClick={() => handleButtonClick('aboutUs', ToAboutUs)}
          >
            About Us
          </button>

          <button
            className={`px-10 py-2 font-semibold rounded-full hover:text-main xs:max-sm:px-3 xs:max-lg:py-1 sm:max-lg:px-7`}
            onClick={() => handleButtonClick('demo', ToDemo)}
          >
            Demo
          </button>
        </div>
        <button
          className="px-4 py-2 bg-main hover:bg-main text-white font-semibold rounded-full text-xl xs:max-sm:px-2 xs:max-sm:py-1 xs:max-sm:text-sm"
          onClick={() => handleButtonClick('login', ToLogin)}
        >
          Log In
        </button>
      </div>
    </nav>
  );
}
export default Navbar;
