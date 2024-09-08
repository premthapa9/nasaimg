import React, { useEffect, useState } from "react";
import { useApod } from "../context/apodcontext";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
const Single = () => {
  const [curr, setCurr] = useState(null);
  const { date } = useParams();
  const { data, loading, isError, online } = useApod();
  useEffect(() => {
    if (data) {
      let mine = data.filter((el) => el.date === date);

      setCurr(mine[0]);
    }
  }, []);
  if (!online) {
    return <h1>You are offline sorry</h1>;
  }
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Something went wrong....</h1>;
  }
  return (
    <div className="flex gap-3  p-2 bg-neutral-500 flex-col items-center sm:items-start sm:flex-row ">
      <div className="p-2 border-r-0 sm:border-r-2">
        {curr?.media_type === "image" ? (
          <img
            src={curr?.url}
            alt=""
            className=" h-[30rem] w-[30rem]   rounded-lg "
          />
        ) : (
          <ReactPlayer url={curr?.url} controls />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-3 border-t-2 sm:border-t-0 ">
        <h1 className="font-semibold text-white">Title: {curr?.title}</h1>
        <p className="font-extralight text-balance tracking-wide text-white">
          Description: {curr?.explanation}
        </p>
        <p className="font-extralight text-balance tracking-wide text-white">
          Date: {curr?.date}
        </p>
        <Link to={"/"}>
          <button className="border rounded-lg w-[200px] py-[3px] font-bold text-white">
            Get Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Single;
