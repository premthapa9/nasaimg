import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import { myearth } from "../constant";
import { addCommasToNumber, calculateSEVAngle, distanceEarth } from "../utils";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import {
  eightone,
  eleone,
  firstone,
  fiveone,
  fourone,
  nineone,
  secondone,
  sevenone,
  sixone,
  tenone,
  thirdone,
  twelveone,
} from "../assets/img";

const Earth = () => {
  const { data, loading, isError } = useFetch(myearth);
  const [curr, setCurr] = useState(0);

  const currInc = () => {
    setCurr((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const currDec = () => {
    setCurr((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const getIcon = (id) => {
    switch (id) {
      case 0:
        return firstone;
      case 1:
        return secondone;
      case 2:
        return thirdone;
      case 3:
        return fourone;
      case 4:
        return fiveone;
      case 5:
        return sixone;
      case 6:
        return sevenone;
      case 7:
        return eightone;
      case 8:
        return nineone;
      case 9:
        return tenone;
      case 10:
        return eleone;
      case 11:
        return twelveone;
      case 12:
        return thirdone;
    }
  };
  const getYearDetails = (input) => {
    let yearinfo = new Date(input);

    let year = yearinfo.getFullYear();
    let month = yearinfo.getMonth() + 1;
    let dateval = yearinfo.getDate();

    if (month < 10) {
      month = "0" + month;
    }

    if (dateval < 10) {
      dateval = "0" + dateval;
    }
    return { year, month, dateval };
  };
  return (
    <div className="bg-[#000000] text-white">
      <h1 className="pt-5 text-2xl text-center font-semibold mb-5 underline underline-offset-8 ">
        Earth Polychromatic Imaging Camera
      </h1>
      <div className="flex gap-2 rounded-xl flex-col-reverse items-center sm:flex-row">
        <div className="flex-[0.4] flex gap-2 ml-5 rounded-lg">
          <div className="p-3 bg-slate-900 flex flex-col text-white mb-7 rounded-xl gap-3">
            <h1>Image Information</h1>
            <div className="flex flex-col gap-2">
              <p>{data?.[curr]?.image}</p>
              <p>Processing Version: {data?.[curr]?.version}</p>
              <p>
                Distance to Earth:{" "}
                {addCommasToNumber(
                  distanceEarth(
                    data?.[curr]?.dscovr_j2000_position?.x,
                    data?.[curr]?.dscovr_j2000_position?.y,
                    data?.[curr]?.dscovr_j2000_position?.z
                  )
                )}{" "}
                km
              </p>
              <p>Distance to Sun: {addCommasToNumber(149597870)} km</p>
              <p>
                Sun to Earth:{" "}
                {addCommasToNumber(
                  distanceEarth(
                    data?.[curr]?.sun_j2000_position?.x,
                    data?.[curr]?.sun_j2000_position?.y,
                    data?.[curr]?.sun_j2000_position?.z
                  )
                )}{" "}
                km
              </p>
              {/* <p>
              SEV Angle:{" "}
              {calculateSEVAngle(
                data?.[curr]?.attitude_quaternions?.q0,
                data?.[curr]?.attitude_quaternions?.q1,
                data?.[curr]?.attitude_quaternions?.q2,
                data?.[curr]?.attitude_quaternions?.q3
              ).toFixed(2)}
            </p> */}
              <p>Date: {data?.[curr]?.date}</p>
            </div>
            <img src={getIcon(curr)} alt="" />
          </div>
        </div>
        <div className="flex-1">
          <div className="p-3  flex items-center justify-center ">
            <FaAngleLeft
              size={30}
              onClick={currDec}
              className="cursor-pointer"
            />
            <img
              src={`https://api.nasa.gov/EPIC/archive/natural/${
                getYearDetails(data?.[curr]?.date).year
              }/${getYearDetails(data?.[curr]?.date).month}/${
                getYearDetails(data?.[curr]?.date).dateval
              }/png/${data?.[curr]?.image}.png?api_key=${process.env.VITE_KEY}`}
              className="h-96 w-96 sm:h-[40rem] sm:w-[40rem]"
            />
            <FaAngleRight
              size={30}
              onClick={currInc}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earth;
