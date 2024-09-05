import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <h1>404 Not Found</h1>
      <Link to="/">
        <button className="px-4 border rounded-lg py-[2px] ">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
