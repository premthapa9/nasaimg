import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import { myearth } from "../constant";
import { distanceEarth } from "../utils";

const Earth = () => {
  const { data, loading, isError } = useFetch(myearth);
  const [curr, setCurr] = useState(0);

  console.log(data);
  return (
    <div>
      <h1 className="mt-4 text-2xl text-center font-semibold ">
        Earth Polychromatic Imaging Camera
      </h1>
      <div>
        <div>
          <div>
            <h1>Image Information</h1>
            <p>{data?.[curr]?.image}</p>
            <p>Processing Version: {data?.[curr]?.version}</p>
            <p>
              Distance to Earth:{" "}
              {distanceEarth(
                data?.[curr]?.dscovr_j2000_position?.x,
                data?.[curr]?.dscovr_j2000_position?.y,
                data?.[curr]?.dscovr_j2000_position?.z
              )}{" "}
              km
            </p>
          </div>
        </div>
        <div>
          <h1>Right</h1>
        </div>
      </div>
    </div>
  );
};

export default Earth;
