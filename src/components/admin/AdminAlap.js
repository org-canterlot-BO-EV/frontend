import React from "react";
import { Routes, Route } from "react-router-dom"; // Fontos importálni a React Router-t
import AdminNav from "./AdminNav";
import NavBarFelso from "./NavBarFelso";
import FelhasznalokLista from "./Felhasznalok";
import PublikalasValaszto from "./PublikalasValaszto";
import ProgramLista from "./Programok";
import Komment from "./Komment";
import Statisztika from "./Statisztika";
import Taxonomia from "./Taxonomia";


function AdminAlap() {
  return (
    <div className="adminTarolo">
      <NavBarFelso />
      <div className="adminFelulet">
        <AdminNav /> 
        <div className="adminTartalom">
          <Routes>
            <Route path="fiokok-kezelese" element={<FelhasznalokLista />} />
            <Route path="programok-szerkesztese" element={<ProgramLista />} />
            <Route path="felvitel" element={<PublikalasValaszto />} />
            <Route path="kommentek-kezelese" element={<Komment />} />
            <Route path="statisztika" element={<Statisztika />} />
            <Route path="taxonomia" element={<Taxonomia />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default AdminAlap;
