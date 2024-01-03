import React from 'react';
import Image from 'next/image';
import logo from '/public/assets/logo.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Footer() {
  return (
    <footer className="bg-main text-white p-4 mt-auto">
      <div className="flex justify-between">
        <div className="flex flex-row items-start w-1/2">
          <div className="flex mr-2">
            <Image
              src={logo}
              alt=""
              className="h-16 w-24 object-cover  xs:max-lg:hidden"
            />
          </div>
          <div>
            <div className="italic text-lg font-medium max-w-xs break-words xs:max-md:text-xs">
              About Us:
            </div>
            <h2 className="xs:max-lg:text-xs">
              At the core of FlexiPlanner lies innovation by the Liberal Party,
              offering a flexible way to organize. Empowering through technology
              for a brighter, efficient tomorrow.
            </h2>
          </div>
        </div>
        <div className="flex flex-col justify-start ml-4">
          <div className="mr-4 ml-4 xs:max-md:text-xs xs:max-md:mr-2 xs:max-md:ml-2">
            <div className="italic text-lg font-medium xs:max-md:text-xs">
              Contact Us:
            </div>
            <p>Email: liberalparty@gmail.com</p>
            <p>Contact Number: 09696969699</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
