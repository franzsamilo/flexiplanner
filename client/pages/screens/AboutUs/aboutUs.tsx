import React from 'react';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-dirty">
      <Navbar/>
      <main className='from-white via-blue-100 to-blue-300'>
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
      <Footer/>
    </div>
  );
}

export default AboutUsPage;
