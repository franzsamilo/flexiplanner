import React from 'react'
import Image from 'next/image'
import logo from '/public/assets/logo.png'
import { useRouter } from 'next/router'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function HomePage() {
  const router = useRouter();

  function navigateToHome() {
    router.push("/screens/Home/Home");
  }

  function navigateToAboutUs() {
    router.push("/screens/AboutUs/aboutUs");
  }

  function navigateToDemo() {
    router.push("/screens/Demo/demo");
  }

  function navigateToLogin() {
    router.push("/screens/Login/login");
  }
  function navigateToSignUp() {
    router.push("/screens/SignUp/SignUp");
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

  function handlePrev () {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  function handleNext ()  {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className='flex flex-col min-h-screen bg-dirty'>
      <Navbar/>
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
      <Footer/>
    </div>
  );
}

export default HomePage;
