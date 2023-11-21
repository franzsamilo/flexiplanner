/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';

function index() {

  const [message, setMessage] = useState("Loading");

  const router = useRouter();

  const navigateToHome = () => {
    router.push('/screens/Home/Home');
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
  <div className="flex-col">
    <div>{message}</div>
    <button onClick={navigateToHome}>Go to Home</button>
  </div>
  
  );
}

export default index;
