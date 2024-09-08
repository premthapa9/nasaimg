import React from "react";

import { Link } from "react-router-dom";
const Marscard = ({ id, earth_date, rover, img_src }) => {
  return (
    <Link to={`/mars/${id}`}>
      <div className="border-gray-500 border rounded-lg p-3 flex items-center w-auto flex-col gap-1 shadow-xl">
        <div>
          <img
            src={img_src}
            className="h-96 w-96  hover:rotate-360 rounded-lg"
            alt="title"
          />
        </div>
        <p className="font-light text-white">Earth Date: {earth_date}</p>
        <p className="font-light text-white">
          Landing Date: {rover?.landing_date}
        </p>
        <p className="font-light text-white">
          Launch Date: {rover?.launch_date}
        </p>
      </div>
    </Link>
  );
};

export default Marscard;
