import React from "react";
import Image, { StaticImageData } from "next/image";
import logo from "/public/assets/logo.png";

interface HeaderProps {
 buttonText: string;
 icon: StaticImageData
}

function Header({ buttonText, icon }: HeaderProps) {
 return (
  <header className="flex items-center bg-main">
    <div className="flex items-center ml-2">
      <Image
        src={icon}
        alt="icon"
        className="w-fit h-fit"
      />
      <div className="flex flex-col items-start pt-2 pl-2">
        <div className="text-white text-2xl font-bold">{buttonText}</div>
      </div>
    </div>

    <div className="ml-auto pr-2">
      <Image src={logo} alt="logo" width={60} height={60} className="w-[60px]" />
    </div>
  </header>
 );
}

export default Header;
