import { useEffect, useState } from "react";

const useFetch = (url, config = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState("");

  async function getData(url, config) {
    setLoading(true);
    try {
      const res = await fetch(url, config);
      const json = await res.json();
      if (res.ok) {
        setLoading(false);
        setIsError("");
        setData(json);
      }
    } catch (err) {
      setIsError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData(url, config);
  }, []);

  return { data, loading, isError };
};

export default useFetch;
