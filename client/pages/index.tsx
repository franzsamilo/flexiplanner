/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";

function index() {

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
  <div>{message}</div>
  );
}

export default index;
