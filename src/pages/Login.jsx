import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const {signIn}=use(AuthContext);
  
  
  const hendleLogin=(e)=>{
    e.preventDefault();
    const email=e.target.email.value;
    const password=e.target.password.value;
    console.log(email, password);
    signIn(email, password);


  }

  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={hendleLogin}>
          <h2 className="text-bold text-3xl my-2">Login your account</h2>
          <label> </label>
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mb-5 mt-4">Login</button>
          <p>
            Don't Have An Account ?
            <span className='text-red-500 font-semibold'>
              {" "}
              <Link to="/auth/register">Register</Link>
            </span>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
