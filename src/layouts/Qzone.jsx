import React from 'react';
import swimmingImage from '../assets/swimming.png';
import classImage from '../assets/class.png';
import play from '../assets/playground.png';
import bg from '../assets/bg.png';

const Qzone = () => {
     return (
          <div className='bg-base-200 p-4'>
               <h2 className='font-bold mb-5'> QZone</h2>
               <div className='my-5 space-y-3'>
                    <img src={swimmingImage} alt="" />
                    <img src={classImage} alt="" />
                    <img src={play} alt="" />
                    <img src={bg}></img>
               </div>
               
          </div>
     );
};

export default Qzone;