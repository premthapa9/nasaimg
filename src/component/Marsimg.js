import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { latestrov } from "../constant";

const Marsimg = () => {
  const [curr, setCurr] = useState(null);
  const { id } = useParams();
  const { data, loading, isError } = useFetch(latestrov);

  useEffect(() => {
    if (data) {
      let mine = data?.latest_photos?.filter((el) => el.id == id);

      setCurr(mine[0]);
    }
  }, [id, data]);

  if (loading) {
    return <h1>Loading....</h1>;
  }
  if (isError) {
    return <h1>{isError}</h1>;
  }
  return (
    <div className="flex gap-2 flex-col sm:flex-row bg-slate-900 text-white">
      <Link to={"/mars"}>
        <button className="px-3 py-[2px] border m-2 rounded-lg">Go Back</button>
      </Link>
      <img src={curr?.img_src} alt="" />
    </div>
  );
};

export default Marsimg;
