import React from 'react';
import SocialLogin from '../components/SocialLogin';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import Qzone from './Qzone';

const RightAside = () => {
     return (
       <div>
         <SocialLogin></SocialLogin>
         <div className='my-10'>
           <h2 className="font-bold text-3xl my-4">Find Us On</h2>

           <div className="join w-full  space-y-3 join-vertical">
             <button className="btn w-full bg-white hover:bg-primary  join-item"> <FaFacebook></FaFacebook> Facebook</button>
             <button className="btn w-full bg-white hover:bg-primary join-item"> <FaTwitter></FaTwitter> Twitter</button>
             <button className="btn w-full bg-white hover:bg-primary join-item"> <FaInstagram></FaInstagram> Instagram</button>
           </div>
         </div>

         <div>
          <Qzone></Qzone>
         </div>
       </div>
     );
};

export default RightAside;