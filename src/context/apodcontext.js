import { createContext, useContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { myapi } from "../constant";
import useOnline from "../hooks/useOnline";

const ApodContext = createContext();

const ApodComp = ({ children }) => {
  const { data, loading, isError } = useFetch(myapi);
  const online = useOnline();

  return (
    <ApodContext.Provider value={{ data, loading, online, isError }}>
      {children}
    </ApodContext.Provider>
  );
};

const useApod = () => {
  return useContext(ApodContext);
};

export default ApodComp;

export { useApod };
