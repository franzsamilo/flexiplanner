/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LoginPage from "./screens/Login/Login"

function index() {
  const router = useRouter();
  const [message, setMessage] = useState("Loading");


  useEffect(() => {
    fetch("http://localhost:6969/api/login")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMessage(data.message);
      });
  }, []);


  return (
    <LoginPage />
  );
}

export default index;
