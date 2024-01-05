import React, { useState } from "react";
import Image from "next/image";
import logo from "/public/assets/logo.png";
import useNavigation from "../Components/Navigation";

function SignUpPage() {
  const { ToLogin, ToHome } = useNavigation();
  const [passwordLengthError, setPasswordLengthError] = useState("");
  const [passwordMismatchError, setPasswordMismatchError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  async function handleSubmit(event: any) {
    event.preventDefault();

    if (hasErrors) {
      console.error("There are validation errors. Please correct them.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setPasswordMismatchError("Passwords do not match");
      return;
    }

    if (formData.password.length < 8) {
      setPasswordLengthError("Password must be at least 8 characters long");
      return;
    }

    setPasswordMismatchError("");
    setPasswordLengthError("");

    try {
      const { confirmPassword, ...dataToSend } = formData;

      const response = await fetch("http://localhost:6969/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        setRegistrationSuccess(true);
        setFormData({
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        console.log("User registered successfully");
      } else {
        console.error("Failed to register user");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  }

  let hasErrors = false;

  function handleChange(event: any) {
    const { id, value } = event.target;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const noSpecialCharsPattern = /^[a-zA-Z0-9]+$/;

    switch (id) {
      case "username":
        if (value.trim() === "" || value.includes(" ")) {
          setUsernameError(
            "Username cannot be empty and cannot contain spaces"
          );
          hasErrors = true;
        } else {
          setUsernameError("");
        }
        break;
      case "email":
        if (!emailPattern.test(value)) {
          setEmailError("Invalid email, please use a valid email address and format");
          hasErrors = true;
        } else {
          setEmailError("");
        }
        break;
      case "password":
        if (!noSpecialCharsPattern.test(value) || value.includes(" ")) {
          setPasswordError(
            "Password cannot contain spaces or special characters"
          );
          hasErrors = true;
        } else {
          setPasswordError("");
        }
        break;
      case "confirmPassword":
        if (!noSpecialCharsPattern.test(value)) {
          setConfirmPasswordError(
            "Confirm password cannot contain spaces or special characters"
          );
          hasErrors = true;
        } else {
          setConfirmPasswordError("");
        }
        break;
      default:
        break;
    }

    setFormData({
      ...formData,
      [id]: value,
    });
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-dirty via-blue-100 to-main">
      <main className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-2xl px-8">
          <div className="bg-white shadow-xl rounded-3xl px-8 py-10">
            <div className="flex justify-center mb-4">
              <button onClick={ToHome}>
                <Image src={logo} alt="Logo" className="h-16 w-16" />
              </button>
            </div>
            <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
            <form className="flex flex-col items-center">
              <div className="mb-4 w-full">
                <label
                  htmlFor="username"
                  className="block text-black text-md font-bold mb-2"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                  value={formData.username}
                  onChange={handleChange}
                  className="shadow appearance-lg rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="email"
                  className="block text-black text-md font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="Enter your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow appearance-lg rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-md font-bold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  className="shadow appearance-lg  rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-6 w-full">
                <label
                  htmlFor="confirmPassword"
                  className="block text-gray-700 text-md font-bold mb-2"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="shadow appearance-lg  rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {passwordMismatchError && (
                  <p className="text-red-500 text-sm mt-2 mb-2">
                    {passwordMismatchError}
                  </p>
                )}
                {registrationSuccess && (
                  <p className="text-green-500 text-md font-bold mb-2">
                    Registered Successfully!
                  </p>
                )}
                {passwordLengthError && (
                  <p className="text-red-500 text-sm mt-2 mb-2">
                    {passwordLengthError}
                  </p>
                )}
              </div>
              {usernameError && (
                <p className="text-red-500 text-sm mt-2 mb-2">
                  {usernameError}</p>
              )}
              {emailError && (
                <p className="text-red-500 text-sm mt-2 mb-2">
                  {emailError}</p>
              )}
              {passwordError && (
                <p className="text-red-500 text-sm mt-2 mb-2">
                  {passwordError}</p>
              )}
              {confirmPasswordError && (
                <p className="text-red-500 text-sm mt-2 mb-2">
                  {confirmPasswordError}
                </p>
              )}
              <button
                type="submit"
                className="w-full bg-secondary hover:bg-main text-white font-bold py-2 px-4 rounded-3xl mb-6"
                onClick={handleSubmit}
              >
                Sign Up
              </button>
              <div className="mt-4 text-center">
                <button
                  className="text-main hover:underline cursor-pointer"
                  onClick={ToLogin}
                >
                  Already have an account?
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SignUpPage;
