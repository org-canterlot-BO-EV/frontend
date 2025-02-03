import React from "react";
import { Link } from "react-router-dom";

function AdminNav() {
  return (
    <div className="adminMenu">
      <h4 id="nev">Bejelentkezett Admin Neve</h4>
      <div>
        <Link to="/felvitel">Esemény vagy cikk hozzáadása</Link>
      </div>
      <div>
        <Link to="/fiokok-kezelese">Fiókok kezelése</Link>
      </div>
      <div>
        <Link to="/kommentek-kezelese">Kommentek kezelése</Link>
      </div>
      <div>
        <Link to="/programok-szerkesztese">Programok szerkesztése és eltávolítása</Link>
      </div>
      <div>
        <Link to="/statisztika">Statisztikák...</Link>
      </div>
      <div>
        <Link to="/taxonomia">Taxonómia</Link>
      </div>
    </div>
  );
}

export default AdminNav;
