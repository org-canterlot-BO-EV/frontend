import { createContext, useContext, useState } from "react";
import { myAxios } from "../api/MyAxios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState({
    felhasznalo_nev: "",
    email: "",
    password: "",
    jelszo_ujra: "",
    vezetek_nev: "",
    kereszt_nev: "",
    szul_datum: "",
    telefon: "",
  });
  const csrf = () => myAxios.get("/sanctum/csrf-cookie");

  const getUser = async () => {
    const { data } = await myAxios.get("/api/user");
    console.log(data)
    setUser(data);
  };
  const logout = async () => {
    await csrf();

    myAxios.post("/logout").then((resp) => {
      setUser(null);
      console.log(resp);
    });
  };

  const loginReg = async ({ ...adat }, vegpont) => {
    await csrf();
    console.log(adat,vegpont);

    try {
      await myAxios.post(vegpont, adat);
      console.log("siker");
      getUser()
      navigate("/");
      
    } catch (error) {
      console.log(error);
      if (error.response.status === 422) {
        setErrors(error.response.data.errors);
      }
    }
  };

  return (
    <AuthContext.Provider value={{ logout, loginReg, errors, getUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};
export default function useAuthContext() {
  return useContext(AuthContext);
}