import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { IoLogoGithub } from 'react-icons/io';

const SocialLogin = () => {
     return (
       <div>
         <h2 className="font-bold">Login With</h2>
         <div className="my-3 space-y-3">
           <button className="btn w-full btn-outline hover:bg-secondary">
             <FcGoogle size={25}/>
             Login With Google
           </button>
           <button className="btn w-full btn-outline hover:bg-primary">
             <IoLogoGithub size={25}/>
             Login With GitHub
           </button>
         </div>
       </div>
     );
};

export default SocialLogin;