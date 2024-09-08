import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-slate-600 flex px-4 py-2 justify-between items-center">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg"
          alt="logo"
        />
      </Link>
      <div className="flex gap-4">
        <Link to="/">
          <p className="font-bold text-white border-b-2 border-transparent hover:border-b-2 hover:border-white px-4 py-[2px] cursor-pointer">
            Home
          </p>
        </Link>
        <Link to="/earth">
          <p className="font-bold text-white border-b-2 border-transparent hover:border-b-2 hover:border-white px-4 py-[2px] cursor-pointer">
            Earth Image
          </p>
        </Link>
        <Link to="/mars">
          <p className="font-bold text-white border-b-2 border-transparent hover:border-b-2 hover:border-white px-4 py-[2px] cursor-pointer">
            Mars Rover Photos
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
