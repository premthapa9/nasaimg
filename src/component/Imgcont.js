import React from "react";
import { useApod } from "../context/apodcontext";
import Cards from "./Cards";

const Imgcont = () => {
  const { data, loading, isError } = useApod();

  if (loading) {
    return <h1 className="text-center mt-9">Loading...</h1>;
  }
  if (isError) {
    return <h1 className="text-center mt-9">{isError}</h1>;
  }
  return (
    <div className="py-5 px-3 bg-slate-700">
      <h1 className="text-center text-3xl text-white underline underline-offset-8">
        Astronomy Picture Collection
      </h1>
      <div className="grid grid-cols-1  sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 mt-5">
        {data?.length > 0 &&
          data?.map((el, ind) => <Cards key={el.date} {...el} />)}
      </div>
    </div>
  );
};

export default Imgcont;
