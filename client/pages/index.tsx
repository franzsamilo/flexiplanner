/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import splash from "../public/assets/splash.jpg";
import google from "../public/assets/icons/google.svg";

function index() {
  const router = useRouter();
  const [message, setMessage] = useState("Loading");

  const navigateToHome = () => {
    router.push("/screens/Home/Home");
  };

  const navigateToSignUP = () => {
    router.push("/screens/GetStarted/GetStarted");
  };

  useEffect(() => {
    fetch("http://localhost:6969/api/login")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMessage(data.message);
      });
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-screen items-center">
      <div className="bg-blue-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <Image src={splash} alt="" className="w-full h-full object-cover" />
      </div>

      <div
        className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
          flex items-center justify-center"
      >
        <div className="w-full h-100">
          <h1 className="text-xl font-bold">{message}</h1>
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12 mb-12">
            Log in to your account
          </h1>

          <button
            type="button"
            onClick={navigateToHome}
            className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
          >
            <div className="flex items-center justify-center">
              <Image src={google} alt="" className="w-6 h-6" />
              <span className="ml-4">Log in with Google</span>
            </div>
          </button>

          <hr className="my-6 border-gray-300 w-full" />

          <button
            type="submit"
            onClick={navigateToHome}
            className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6"
          >
            Continue Offline
          </button>

          <p className="mt-8">
            Need an account?
            <button
              onClick={navigateToSignUP}
              className="text-blue-500 hover:text-blue-700 font-semibold ml-3"
            >
              Create an account
            </button>
          </p>

          <p className="text-sm text-gray-500 mt-12">
            &copy; 2023 Flexiplanner - All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default index;