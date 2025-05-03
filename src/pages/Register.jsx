import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';



const Register = () => {
     const { createUser } = use(AuthContext);
     const hendleRegister=(e)=>{
          e.preventDefault();
          const name= e.target.name.value;
          const email= e.target.email.value;
          const password= e.target.password.value;
          console.log(name, email, password);
          createUser(email, password);

     }
     return (
       <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
         <div className="card-body">
           <form onSubmit={hendleRegister}>
             <h2 className="text-bold text-3xl my-2">Register your account</h2>
             <label className="label">Name</label>
             <input type="name" name='name' className="input" placeholder='Name' />
             <label className="label">Email</label>
             <input type="email" name='email' className="input" placeholder="Email" />
             <label className="label">Password</label>
             <input type="password" name='password' className="input" placeholder="Password" />
             <div>
               <a className="link link-hover">Forgot password?</a>
             </div>
             <button type='submit' className="btn  btn-neutral mb-5 mt-4">Register</button>
             <p>
               Have An Account ?
               <span className="text-red-500 font-semibold">
                 {" "}
                 <Link to="/auth/login">Login</Link>
               </span>{" "}
             </p>
           </form>
         </div>
       </div>
     );
};

export default Register;