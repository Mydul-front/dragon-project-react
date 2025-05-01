import React from "react";
import logo from "../assets/logo.png";
import { formatDate } from "date-fns";

const Header = () => {
  return (
    <div className="flex justify-center flex-col mt-3 items-center gap-3">
      <img className="w-[450px]" src={logo} alt="" />
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p className='text-semibold text-accent'>{formatDate(new Date(), "EEEE , MMMM MM , yyyy")}</p>
    </div>
  );
};

export default Header;
