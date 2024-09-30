import React from 'react'
import Img1 from '../page1.svg'
import { useNavigate } from 'react-router-dom';
import { useAuth } from './security/AuthContext';



function Main1() {

  const authContext = useAuth();

  const navigate  = useNavigate();

  const navigateToLogin = () =>{
    navigate('/login')
  }

  const navigateToSignup = () =>{
    navigate('/signup')
  }


  return (
    <div className='container mx-auto bg-white w-full h-full bg-page lg:bg-cover bg-cover bg-no-repeat mt-[70px] overflow-hidden'>
      <div className='lg:flex justify-center items-center min-h-screen overflow-hidden h-full'>
        <div className='lg:hidden block'>
        <div className='flex justify-center'>
            <img src={Img1} alt='' className='w-[550px]'></img>
          </div>
        </div>
        <div className='lg:ml-1 lg:pt-12 overflow-hidden'>
          <h1 className='overflow-hidden font-primary font-bold text-slate-500 lg:text-[90px] text-[60px] leading-none lg:text-left text-center'>Practice<br/>Web-based<br/>Tests</h1>
          <div className='pt-5 lg:justify-start justify-around lg:flex text-center'>
            <div>
              <button onClick={navigateToLogin} className='outline-none bg-white shadow px-6 py-3 lg:w-[150px] w-[60%] lg:mb-0 mb-3 rounded-full border border-green-300 lg:mr-8 active:bg-green-300/50 duration-200 hover:bg-green-700 hover:text-white'>Login</button>
            </div>
            <div>
              <button onClick={navigateToSignup} className='outline-none bg-white shadow px-6 py-3 lg:w-[150px] w-[60%] rounded-full border border-blue-300 lg:mr-8 active:bg-blue-300/50 duration-100 hover:bg-blue-700 hover:text-white'>Sign-up</button>
            </div>
          </div>
        </div>
        <div>
          <div className='lg:block hidden'>
            <img src={Img1} alt='' className='h-[600px]'></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main1;