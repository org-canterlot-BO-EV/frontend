import React, { useState, useEffect } from 'react';

const FelhasznalokLista = () => {
  const [felhasznalok, setFelhasznalok] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFelhasznalok = felhasznalok.filter((felhasznalo) =>
    felhasznalo.felhasznalo_nev.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (index) => {
    //KELL
  };

  return (
    <div className="felhasznalokLista">
      <h2>Felhasználók listája</h2>
      <input
      className='felhasznaloKereso'
        type="text"
        placeholder="Keresés felhasználónév alapján"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Felhasználó név</th>
            <th>Vezetéknév</th>
            <th>Keresztnév</th>
            <th>Születési dátum</th>
            <th>Telefon</th>
            <th>Email</th>
            <th>Jogosultság típus</th>
            <th>Műveletek</th>
          </tr>
        </thead>
        <tbody>
          {filteredFelhasznalok.length > 0 ? (
            filteredFelhasznalok.map((felhasznalo, index) => (
              <tr key={index}>
                <td>{felhasznalo.felhasznalo_nev}</td>
                <td>{felhasznalo.vezetek_nev}</td>
                <td>{felhasznalo.kereszt_nev}</td>
                <td>{felhasznalo.szul_datum}</td>
                <td>{felhasznalo.telefon}</td>
                <td>{felhasznalo.email}</td>
                <td>{felhasznalo.jogosultsag_tipus}</td>
                <td>
                  <button 
                    className="deleteBtn" 
                    onClick={() => handleDelete(index)}
                  >
                    🗑️ Törlés
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">Nincsenek találatok</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FelhasznalokLista;
