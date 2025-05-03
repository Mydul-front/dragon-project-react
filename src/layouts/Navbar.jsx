import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userImag from '../assets/user.png';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
     const { user, LogOut } = use(AuthContext);
    //  console.log(user);
    const handleLogOut=()=>{
      LogOut();
    }
     return (
       <div className="flex justify-between items-center">
         <div className="">{user && user.email}</div>
         <div className="nav flex text-accent  gap-5">
           <NavLink to="/">Home</NavLink>
           <NavLink to="/about">About</NavLink>
           <NavLink to="/career">Career</NavLink>
         </div>
         <div className="login-btn flex items-center gap-4">
           <img src={userImag} alt="user image" />
           {user ? (
             <button onClick={handleLogOut} className="btn btn-primary">Log Out</button>
           ) : (
             <Link to="/auth/login" className="btn btn-primary">
               Log in
             </Link>
           )}
         </div>
       </div>
     );
};

export default Navbar;