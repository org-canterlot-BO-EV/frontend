import { Route, Routes } from "react-router-dom";
import Kezdolap from "./pages/Kezdolap";
import Bejelentkezes from "./pages/Bejelentkezes";
import Regisztracio from "./pages/Regisztracio";
import "./App.css";
import VendegLayout from "./pages/VendegLayout";
import AdminAlap from "./components/admin/AdminAlap";
import useAuthContext from "./contexts/AuthContext";
import FelhasznalokLista from "./components/admin/Felhasznalok";
import ProgramLista from "./components/admin/Programok";
import PublikalasValaszto from "./components/admin/PublikalasValaszto";
import Komment from "./components/admin/Komment";
import Statisztika from "./components/admin/Statisztika";
import Taxonomia from "./components/admin/Taxonomia";

function App() {
  const { user } = useAuthContext();
  return (
    <>
      <Routes>
        {!user && (
          <Route path="/" element={<VendegLayout />}>
            <Route index element={<Kezdolap />} />
            <Route path="bejelentkezes" element={<Bejelentkezes />} />
            <Route path="regisztracio" element={<Regisztracio />} />
          </Route>
        )}

        {user && (
          <Route
            path="/"
            element={
              user.jogosultsag_tipus === "adm" ? (
                <>
                  <AdminAlap />
                </>
              ) : (
                <Kezdolap />
              )
            }
          >
            <Route path="fiokok-kezelese" element={<FelhasznalokLista />} />
            <Route path="programok-szerkesztese" element={<ProgramLista />} />
            <Route path="felvitel" element={<PublikalasValaszto />} />
            <Route path="kommentek-kezelese" element={<Komment />} />
            <Route path="statisztika" element={<Statisztika />} />
            <Route path="taxonomia" element={<Taxonomia />} />
          </Route>
        )}
      </Routes>
    </>
  );
}

export default App;
