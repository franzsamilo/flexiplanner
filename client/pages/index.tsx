/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";

import Home from "./screens/Home/Home";
import Image from "next/image";
import splash from "../public/assets/splash.jpg";
import splash2 from "../public/assets/splash2.jpg";

function index() {
  const router = useRouter();
  const { user, error, isLoading } = useUser();

  const [message, setMessage] = useState("Loading");

  function Logout() {
    router.push("/api/auth/logout");
  }

  function Login() {
    router.push("/api/auth/login");
  }

  useEffect(() => {
    fetch("http://localhost:6969/api/login")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMessage(data.message);
      });
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div className="w-screen h-screen overflow-y-scroll">
        <Home />
        <button onClick={Logout}>Logout</button>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row h-screen items-center">
      <div className="bg-blue-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <Image src={splash} alt="" className="w-full h-full object-cover" />
      </div>

      <div
        className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
      >
        <div className="w-full h-100 items-center text-center ">
          <h1 className="text-3xl font-bold text-blue-300 mb-12">{message}</h1>
          <Image src={splash2} alt="" className="rounded-3xl"/>
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12  text-blue-700">
            Log in to your account
          </h1>

          <hr className="my-6 border-gray-300 w-full" />

          <button
            onClick={Login}
            className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
          >
            Login
          </button>

          <hr className="my-6 border-gray-300 w-full" />

          <p className="mt-8">
            Need an account?
            <button
              onClick={Login}
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
