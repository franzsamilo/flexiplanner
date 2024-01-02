import React from "react";
import Image from "next/image";
import logo from "/public/assets/logo.png";
import { useRouter } from "next/router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomePage() {
  const router = useRouter();

  function navigateToHome() {
    router.push("/screens/Home/Home");
  }

  function navigateToAboutUs() {
    router.push("/screens/AboutUs/AboutUs");
  }

  function navigateToDemo() {
    router.push("/screens/Demo/Demo");
  }

  function navigateToLogin() {
    router.push("/screens/Login/Login");
  }

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const sliderRef = React.useRef<Slider>(null);

  function handlePrev() {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  }

  function handleNext() {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
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
              className="px-10 py-2 bg-main rounded-full font-semibold hover:text-dirty text-white"
              onClick={navigateToHome}
            >
              Home
            </button>
            <button
              className="px-10 py-2 bg-none font-semibold hover:text-main rounded-3xl"
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
          <button
            className="px-4 py-2 bg-main hover:bg-main text-white font-semibold rounded-3xl"
            onClick={navigateToLogin}
          >
            Sign Up
          </button>
        </div>
      </nav>

      <main>
        <div className="mx-auto my-[10px] w-[600px]">
          <p className="font-raleway font-extrabold text-[#425dc8] text-5xl text-center  leading-[1.25]">
            A flexible way to start your day
          </p>
        </div>

        <div className="my-5">
          <p className="font-raleway font-bold text-[#1e1e1e] text-xl text-center">
            Make spontaneous changes anytime, anywhere
          </p>
        </div>

        <div className="flex justify-center items-center my-10">
          <button
            className="px-[25px] py-[14px] bg-main rounded-full font-roboto font-bold text-xl text-white"
            onClick={navigateToLogin}
          >
            Get Started
          </button>
        </div>

        <div className="flex flex-row items-center justify-center my-10">
          <div>
            <button onClick={handlePrev}>
              <Image
                className="w-auto px-3"
                src="/assets/icons/arrow-left.png"
                alt="arrow-left"
                width={40}
                height={64}
              />
            </button>
          </div>

          <div className="w-full max-w-3xl overflow-hidden">
            <Slider ref={sliderRef} {...carouselSettings}>
              <div>
                <Image
                  src="/assets/image1.png"
                  alt="Image 1"
                  width={1200}
                  height={600}
                />
              </div>
              <div>
                <Image
                  src="/assets/image2.png"
                  alt="Image 2"
                  width={1200}
                  height={600}
                />
              </div>
            </Slider>
          </div>

          <div>
            <button onClick={handleNext}>
              <Image
                className="w-auto px-3"
                src="/assets/icons/arrow-right.png"
                alt="arrow-right"
                width={40}
                height={64}
              />
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-main text-white p-4 h-40">
        <div className="flex justify-between">
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

export default HomePage;
