import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TestStartConfirmation({ message }) {
  const [showPopUp, setShowPopUp] = useState(false);

  const startTestButton = () => {
    message(true);
  };

  const doNotStartButton = () => {
    setShowPopUp(true);
  };

  const closeModal = () => {
    setShowPopUp(false);
  };

  const navigate = useNavigate();

  const navigateToSelectTest = () => {
    navigate('/select-test')
  };

  


  return (
    <div className="">
      <div className={`flex flex-col justify-center items-center gap-10`}>
        <div>
          <p className='text-2xl'>Do you want to start the test?</p>
        </div>
        <div className='flex gap-10'>
          <button onClick={startTestButton} className='bg-green-600 p-2 px-7 rounded-full text-white'>
            Yes
          </button>
          <button onClick={doNotStartButton} className='bg-red-600 p2 px-7 rounded-full text-white'>
            No
          </button>
        </div>
      </div>

      {showPopUp && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <p className='text-lg font-semibold mb-4'>Are you sure you want to cancel?</p>
            <div className='flex justify-end'>
              <button onClick={navigateToSelectTest} className='bg-red-600 text-white px-4 py-2 mr-5 rounded-full'>
                  Confirm
                </button>
              <button onClick={closeModal} className='text-gray-500 hover:text-gray-700 mr-4'>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


export default TestStartConfirmation;
