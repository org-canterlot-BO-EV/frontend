import React, { useState } from 'react';
import FelhasznaloSorok from './FelhasznaloSorok';
import useApiContext from '../../contexts/ApiContext.js';

const FelhasznalokLista = () => {
  const {felhasznalok} = useApiContext();      
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFelhasznalok = felhasznalok.filter((elem) =>
    elem.felhasznalo_nev.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          {
             filteredFelhasznalok.map((elem, index) => {
              return <FelhasznaloSorok elem={elem} key={index} index={index}/>
             })
          }
        </tbody>
      </table>
    </div>
  );
};

export default FelhasznalokLista;