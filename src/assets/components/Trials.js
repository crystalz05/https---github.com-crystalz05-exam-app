import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Trials() {
  const score = 50;

  return (
    <div>
      <div className='container mx-auto bg-white w-full h-screen bg-green-100 lg:bg-cover bg-cover bg-no-repeat mt-[70px] overflow-hidden'>
        <div className='w-full h-full flex justify-center items-center'>
          <div style={{ width: '300px' }}>
            <CircularProgressbar
              value={score}
              text={`${score}%`}
              styles={buildStyles({
                pathColor: `#4CAF50`,
                textColor: '#000',
                trailColor: '#fff',
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trials;
