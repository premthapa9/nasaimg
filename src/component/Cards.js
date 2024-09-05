import React from "react";
import myImg from "../assets/img/notfound.png";
import { Link } from "react-router-dom";
const Cards = ({ date, title, url, media_type, explanation }) => {
  return (
    <Link to={`/${date}`}>
      <div className="border-gray-500 border rounded-lg p-3 flex items-center w-auto flex-col gap-4 shadow-xl">
        <h1 className="font-bold  text-white">{title}</h1>
        <div>
          <img
            src={media_type === "image" ? url : myImg}
            className="h-96 w-96  hover:rotate-360 rounded-lg"
            alt="title"
          />
        </div>
        <p className="font-medium text-white">{date}</p>
      </div>
    </Link>
  );
};

export default Cards;
