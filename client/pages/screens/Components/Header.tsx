import React, { useState } from "react";
import Image from "next/image";
import logo from "/public/assets/logo.png";
import academicsIcon from "public/assets/icons/academics-icon.png";

interface HeaderProps {
  buttonText: string;
}

function Header({ buttonText }: HeaderProps) {
  return (
    <header className="flex items-center bg-main">
      <div className="flex items-center ml-2">
        <Image
          src={academicsIcon}
          alt="academics-icon"
          className="w-[50px] h-[60px]"
        />
        <div className="flex flex-col items-start pt-2 pl-2">
          <div className="text-white text-2xl font-bold">{buttonText}</div>
        </div>
      </div>

      <div className="ml-auto pr-2">
        <Image src={logo} alt="logo" className="w-[60px]" />
      </div>
    </header>
  );
}

export default Header;
