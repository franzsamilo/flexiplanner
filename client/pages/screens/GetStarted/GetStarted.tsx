import React from "react";
import Image from "next/image";
import splash from "../../../public/assets/splash.jpg";
import { useRouter } from "next/router";
import ImageCarouselGetStarted from "./ImageCarousel";

function GetStarted() {
  const router = useRouter();

  const navigateToLogin = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col h-screen w-screen items-center overflow-y-auto">
      <div className="flex flex-row items-center mt-12">
        <Image src={splash} alt="" className="rounded-full h-52 w-52"></Image>
        <p className="ml-4 text-[112px]">Flexiplanner</p>
      </div>
      <button
        className="w-1/6 h-24 rounded-3xl bg-blue-400 mt-12"
        onClick={navigateToLogin}
      >
        <p className="text-[42px] text-white">Get Started</p>
      </button>
      <div className="w-screen my-12 h-3 bg-blue-300"/>
        <ImageCarouselGetStarted/>
      <div className="w-screen my-12 h-3 bg-blue-300"/>
    </div>
  );
}

export default GetStarted;
