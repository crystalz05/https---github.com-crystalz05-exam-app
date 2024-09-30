import React, { useContext, useState } from "react";
import Welcome from "../welcome.jpg";
import Logo from "../logo.png";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

function Login() {
  const authContext = useAuth();

  const [showIncorrectMessage, setShowIncorrectMessage] = useState(false);

  const [username, setUsername] = useState("tyro");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  const navigateToSignup = () => {
    navigate("/signup");
  };

  function navigateToSelectTest() {
    navigate("/select-test");
  }

  const handleUsername = (event) => {
    const newUsername = event.target.value;
    setUsername(newUsername);
  };

  const handlePassword = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };

  const handleLogin = async () => {
    const isAuthenticated = await authContext.login(username, password);

    if (isAuthenticated) {
      setShowIncorrectMessage(false);
      navigateToSelectTest();
    } else {
      setShowIncorrectMessage(true);
    }
  };

  return (
    <div className="container mx-auto bg-white w-full h-full bg-page lg:bg-cover bg-cover bg-no-repeat mt-[70px] overflow-hidden">
      <div className="lg:flex w-full h-full items-center">
        <div className="w-[400px] flex-1">
          <img src={Welcome} alt="" className="mix-blend-multiply" />
        </div>
        <div className="flex-1 bg-white h-full right-0 shadow-lg lg:max-w-[40%] flex flex-col justify-center items-center text-center lg:p-10 px-[30px] lg:px-[100px]">
          <div className="w-full flex justify-center">
            <img src={Logo} alt="" className="w-[250px] mb-8" />
          </div>
          <div className="w-full pb-12">
            <h1 className="font-primary font-bold lg:text-[50px] text-[30px]">
              Welcome Back!
            </h1>
            <p className="font-primary lg:text-[20px] text-[15px] text-green-600">
              Please enter your details
            </p>
          </div>
          {showIncorrectMessage && (
            <div className="text-red-500 text-xl">
              Error, Invalid email or password
            </div>
          )}

          <form className="flex flex-col w-full">
            <input
              type="text"
              placeholder="Email"
              value={username}
              onChange={handleUsername}
              className="bg-transparent border-b outline-none text-[20px] pb-5 pt-5"
            ></input>
            <div className="relative">
              <div className="">
                <input
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={handlePassword}
                  placeholder="Password"
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
            <input
              type="button"
              onClick={handleLogin}
              className="cursor-pointer bg-black rounded-full py-5 mt-3 text-white"
              value={"Log In"}
            ></input>
            <button className="bg-black/20 rounded-full py-5 mt-3">
              <FaGoogle className="inline" />
              <span className="pl-4">Log in with Google</span>
            </button>
          </form>

          <div className="mt-[120px]">
            <h3>
              Don't have an account?{" "}
              <a href="" onClick={navigateToSignup}>
                Sign Up
              </a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
