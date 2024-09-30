import React from 'react'
import Hamburger from '../hamburger.png'
import { useState } from 'react';
import Close from '../close.svg'
import Logo from '../logo.png'
import { useAuth } from './security/AuthContext';
import { Link } from 'react-router-dom';

function Header() {

  const authContext = useAuth();



  const [isRotated, setRotated] = useState(false);
  const [isHidden, setHidden] = useState(true);

  const handleHamburgerClick = () => {
    setRotated(!isRotated);
    setHidden(!isHidden);

    const body = document.body;
    body.style.overflow = isHidden ? 'hidden' : 'auto';
  };

  const handleHamburgerClick2 = () => {
    setRotated(!isRotated);
    setHidden(!isHidden);

    const body = document.body;
    body.style.overflow = isHidden ? 'hidden' : 'auto';
    authContext.logout()  
  };

  ;

  return (
    <nav className=''>
    <nav className='container mx-auto bg-white flex justify-center fixed top-0 left-1/2 transform -translate-x-1/2 w-full shadow-md overflow-hidden'>
      <div className='w-full '>
        <div className='flex justify-between items-center h-[70px]'>
        <div className=''><a href='/'><img src={Logo} alt='' className='h-[50px] ml-5'/></a></div>
        <div className='flex justify-right'>
          <ul className='lg:flex gap-x-10 hidden lg:block'>
          <li>
              <a href='' className='cursor-pointer py-2 text-xl'>Review Subjects</a>
            </li>
            <li>
              <a className="cursor-pointer px-3 py-2 bg-white border-none border-black text-black hover:text-white hover:bg-blue-900 duration-200 active:bg-black/30 text-black text-xl font-semibold rounded-md focus:outline-none">Get Started</a>
            </li>
            <li>
              {authContext.isAuthenticated && <a href='/login' onClick={authContext.logout} className='cursor-pointer py-2 bg-blue-900 text-white px-5 rounded-full hover:bg-white hover:text-black text-xl duration-200 active:bg-black/30'>Logout</a>}
              {!authContext.isAuthenticated && <Link to='/login' className='cursor-pointer py-2 bg-blue-900 text-white px-5 rounded-full hover:bg-white hover:text-black text-xl duration-200 active:bg-black/30'>Login</Link>}
            </li>

          </ul>
        </div>
        <div className='lg:hidden'>
          <img src={Hamburger} alt='' 
          onClick={handleHamburgerClick}
          className={`cursor-pointer h-[40px] duration-500 ${isRotated ? '-rotate-90' : ''}`}></img>
        </div>
        </div>
      </div>      
    </nav>
      <div className='w-full bg-black overflow-hidden'>
        <div id='nav-second'
          className={`lg:hidden w-full bg-white/50 h-screen backdrop-blur-xl absolute z-50 right-0 shadow ${isHidden ? 'translate-x-full duration-500' : '-translate-x-0 duration-500'}`}>
          <div
            onClick={handleHamburgerClick}
            className={`cursor-pointer flex w-full justify-end pb-5 pt-4 border-b pr-6 `}>
            <img src={Close} className='h-[25px] my-3 pr-6 '></img>
          </div>
          <div className='flex flex-col text-right w-full pr-6'>
              <div className='py-5 text-xl pr-6 border-b'>Review Subject</div>
              <div className='py-5 text-xl pr-6 border-b'>Get Started</div>
              {!authContext.isAuthenticated && <Link to='/login' onClick={handleHamburgerClick} className='py-5 text-xl pr-6 border-b'>Login</Link>}
              {authContext.isAuthenticated && <a href='/login' onClick={handleHamburgerClick2} className={`py-5 text-xl pr-6 border-b' `}>Logout</a>}
          </div>
        </div>
    </div>
    </nav>
  )
}

export default Header;