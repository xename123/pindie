import { useEffect, useState } from "react";
import { getNormalizedGamesDataByCategory, isResponseOk } from "./api-utils";

export const useGetDataByCategory = (endpoint, category) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const data = await getNormalizedGamesDataByCategory(endpoint, category);
      console.log(data);
      isResponseOk(data) ? setData(data) : setData([]);
    }
    fetchData();
  }, []);
  return data;
};
