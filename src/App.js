import { Route, Routes } from "react-router-dom";
import Kezdolap from "./pages/Kezdolap";
import Bejelentkezes from "./pages/Bejelentkezes";
import Regisztracio from "./pages/Regisztracio";
import './App.css';
import VendegLayout from "./pages/VendegLayout";
import AdminAlap from "./components/admin/AdminAlap";
import useAuthContext from "./contexts/AuthContext";

function App() {
    const { user } = useAuthContext();
    return (
      <>
        <Routes>
          {
            !user && (
              <Route path="/" element={<VendegLayout />}>
                <Route index element={<Kezdolap/>}/>
                <Route path="bejelentkezes" element={<Bejelentkezes />} />
                <Route path="regisztracio" element={<Regisztracio />} />


                        
            </Route>
          )}

          {user&&(
            <Route path="/" 
            element={
              user.jogosultsag_tipus === "adm" ? (
                <AdminAlap />
              ) : (
                <Kezdolap />
              )
            }
            >
              </Route>
          )}
        </Routes>
      </>
    );  
}

export default App;