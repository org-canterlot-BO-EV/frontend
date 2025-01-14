import { createContext, useContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";

export const ApiContext = createContext("");

export const ApiProvider = ({ children }) => {
  const [programTipusok, setProgramTipusok] = useState([]);

  const getAdat = async (vegpont, asyFgv) => {
    try {
      const response = await myAxios.get(vegpont);
      asyFgv([...response.data]);
    } catch (err) {
      console.log("Nem jó");
    }
  };

  useEffect(() => {
    getAdat("/programtipusok", setProgramTipusok);
  }, []);

  return (
    <ApiContext.Provider value={{ programTipusok}}>
      {children}
    </ApiContext.Provider>
  );
};

export default function useApiContext() {
  return useContext(ApiContext);
}