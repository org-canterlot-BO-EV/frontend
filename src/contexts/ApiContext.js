import { createContext, useContext, useEffect, useState } from "react";
import { myAxios } from "../api/MyAxios";

export const ApiContext = createContext("");

export const ApiProvider = ({ children }) => {
  const [programTipusok, setProgramTipusok] = useState([]);
  const [felhasznalok, setFelhasznalok] = useState([]);
  const [programok, setProgramok] = useState([]);
  const [taxonomiak, setTaxonomiak] =useState([]);

  const getAdat = async (vegpont, asyFgv) => {
    try {
      const response = await myAxios.get(vegpont);
      asyFgv([...response.data]);
    } catch (err) {
      console.log("Nem jó");
    }
  };

  const postAdat = async (vegpont, adat) => {
    try{
        const response = await myAxios.post(vegpont, adat, {
          
        });
    } catch (err) {
        console.log("Nem jó");
    }
  }

  useEffect(() => {
    getAdat("api/programtipusok", setProgramTipusok);
    getAdat("api/felhasznalok", setFelhasznalok);
    getAdat("api/programok", setProgramok);
    getAdat("api/mindentaxonomia", setTaxonomiak);
  }, []);


  return (
    <ApiContext.Provider value={{ programTipusok, felhasznalok, programok, taxonomiak }}>
      {children}
    </ApiContext.Provider>
  );

};

export default function useApiContext() {
  return useContext(ApiContext);
}