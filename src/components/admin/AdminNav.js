import React from "react";

function AdminNav() {
  return (
    <div className="adminMenu">
      <h4 id="nev">Bejelentkezett Admin Neve</h4>
      <div>
        <a href="#">Tartalom hozzáadása</a>
      </div>
      <div>
        <a href="#">Fiókok kezelése</a>
      </div>
      <div>
        <a href="#">Kommentek kezelése</a>
      </div>
      <div>
        <a href="#">Programok szerkesztése és eltávolítása</a>
      </div>
    </div>
  );
}

export default AdminNav;
