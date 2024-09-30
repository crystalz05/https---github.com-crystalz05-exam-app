import React, { useState } from "react";
import Joinus from "../join-us.png";
import Logo from "../logo.png";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

function Signup() {
  const navigate = useNavigate();
  const authContext = useAuth();

  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  const navigateToLogin = () => {
    navigate("/login");
  };

  const navigateToSelectTest = () => {
    navigate("/select-test");
  };

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);
  };

  const handleUserNameChange = (event) => {
    const newUserName = event.target.value;
    setUsername(newUserName);
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };

  const handlePasswordConfirmationChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };

  const handleSignUp = async () => {
    setShowErrorMessage(false);
    setShowSuccessMessage(false);

    const signUpResult = await authContext.signUp(name, username, password);
    if (signUpResult) {
      setShowSuccessMessage(true);
      setName("");
      setUsername("");
      setPassword("");
    } else {
      setShowErrorMessage(true);
    }
  };

  return (
    <div className="container mx-auto bg-white w-full h-full bg-page lg:bg-cover bg-cover bg-no-repeat mt-[70px] overflow-hidden">
      <div className="lg:flex w-full h-full items-center">
        <div className="w-[400px] flex-1">
          <img src={Joinus} alt="" className="mix-blend-multiply" />
        </div>
        <div className="flex-1 bg-white h-full right-0 shadow-lg lg:max-w-[40%] flex flex-col justify-center items-center text-center lg:p-10 px-[30px] lg:px-[100px]">
          <div className="w-full flex justify-center">
            <img src={Logo} alt="" className="w-[250px] mb-8" />
          </div>
          <div className="w-full pb-12">
            <h1 className="font-primary font-bold lg:text-[50px] text-[30px]">
              Sign-Up!
            </h1>
            <p className="font-primary lg:text-[20px] text-[15px]">
              Create an account to try out our App
            </p>
          </div>
          <form className="flex flex-col w-full">
            {showSuccessMessage && (
              <p className="text-green-500">Account Created Successfully</p>
            )}
            {showErrorMessage && (
              <p className="text-red-600">Error Creating ACcount</p>
            )}
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={handleNameChange}
              className="bg-transparent border-b outline-none text-[20px] pb-5 pt-5"
            ></input>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUserNameChange}
              className="bg-transparent border-b outline-none text-[20px] pb-5 pt-5"
            ></input>

            <div className="relative">
              <div className="">
                <input
                  type={show ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="w-full bg-transparent border-b outline-none text-[20px] pb-5 pt-5"
                ></input>
              </div>
              <div className="absolute top-7 text-black/50 right-1 text-2xl cursor-pointer">
                {show ? (
                  <FaEyeSlash onClick={handleShow} />
                ) : (
                  <FaEye onClick={handleShow} />
                )}
              </div>
            </div>
            {/* <div className="relative">
              <div className="">
                <input
                  type={show ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordConfirmationChange}
                  className="w-full bg-transparent border-b outline-none text-[20px] pb-5 pt-5"
                ></input>
              </div>
            </div> */}
            <div>
              <p className="mt-10">
                I agree with terms of use and privacy policy
              </p>
            </div>
            <button
              type="button"
              onClick={handleSignUp}
              className="bg-amber-600 rounded-full py-5 mt-3 text-white"
            >
              Sign Up
            </button>
            <div></div>
            <button
              type="button"
              className="bg-black/10 rounded-full py-5 mt-3"
            >
              <FaGoogle className="inline" />

              <span className="pl-4">Sign Up with Google</span>
            </button>
          </form>

          <div className="mt-[80px]">
            <h3>
              <a href="" onClick={navigateToLogin}>
                Aready have an account? Login
              </a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
