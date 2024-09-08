import React from "react";
import useFetch from "../hooks/useFetch";
import { latestrov } from "../constant";
import Marscard from "./Marscard";

const Mars = () => {
  const { data, loading, isError } = useFetch(latestrov);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>{isError}</h1>;
  }
  return (
    <div className="py-5 px-3 bg-slate-700">
      <h1 className="text-center text-3xl text-white underline underline-offset-8">
        Mars Rover Images
      </h1>
      <div className="grid grid-cols-1  sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 mt-5">
        {data?.latest_photos?.length > 0 &&
          data?.latest_photos?.map((el, ind) => (
            <Marscard key={el.id} {...el} />
          ))}
      </div>
    </div>
  );
};

export default Mars;
