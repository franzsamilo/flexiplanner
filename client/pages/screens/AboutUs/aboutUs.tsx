import React from 'react';
import Image from 'next/image';
import logo from '/public/assets/logo.png';
import { useRouter } from 'next/router';

function AboutUsPage() {
  const router = useRouter();

  function navigateToHome() {
    router.push('/screens/Home/home');
  }

  function navigateToAboutUs() {
    router.push('/screens/AboutUs/aboutUs');
  }

  function navigateToDemo() {
    router.push('/screens/Demo/demo');
  }

  return (
    <div className="flex flex-col min-h-screen bg-dirty">
      <nav className="bg-white text-black p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image src={logo} alt="" className="h-12 w-12 mr-2" />
            <span className="text-main text-2xl font-semibold">
              FlexiPlanner
            </span>
          </div>
          <div className="flex justify-center text-xl mr-20">
            <button
              className="px-10 py-2 bg-none font-semibold hover:text-main rounded-3xl"
              onClick={navigateToHome}
            >
              Home
            </button>

            <button
              className="px-10 py-2 bg-main rounded-full font-semibold hover:text-dirty text-white"
              onClick={navigateToAboutUs}
            >
              About Us
            </button>
            <button
              className="px-10 py-2 bg-none font-semibold hover:text-main rounded-3xl"
              onClick={navigateToDemo}
            >
              Demo
            </button>
          </div>
          <button className="px-4 py-2 bg-main hover:bg-main text-white font-semibold rounded-3xl">
            Sign Up
          </button>
        </div>
      </nav>

      <main>
        <div className="mx-auto my-[10px] w-[600px]">
          <p className="font-raleway font-extrabold text-[#425dc8] text-5xl text-center  leading-[1.25]">
            About Us
          </p>
        </div>

        <div className="my-5">
          <p className="font-raleway font-bold text-[#1e1e1e] text-xl text-center">
            Meet the members
          </p>
        </div>
      </main>

      <footer className="bg-main text-white p-4 h-40">
        <div className="flex flex-grow justify-between mt-atuo">
          <div className="flex items-start">
            <div className="mr-2">
              <Image src={logo} alt="" className="h-20 w-20 object-cover" />
            </div>
            <div className="overflow-wrap">
              <span className="italic text-lg font-medium max-w-xs break-words">
                About Us:
              </span>
              <h2 className="max-w-[40%]">
                At the core of FlexiPlanner lies innovation by the Liberal
                Party, offering a flexible way to organize. Empowering through
                technology for a brighter, efficient tomorrow.
              </h2>
            </div>
          </div>
          <div className="flex flex-col justify-start ml-4">
            <div className="mr-4">
              <span className="italic text-lg font-medium">Contact Us:</span>
              <h1 className="text-lg font-medium">Feel free to reach out:</h1>
              <p>Email: liberalparty@gmail.com</p>
              <p>Contact Number: 09696969699</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AboutUsPage;
