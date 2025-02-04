import React, { useState, useEffect } from 'react';
import TaxonomiaSorok from './TaxonomiaSorok';
import useApiContext from '../../contexts/ApiContext';

const Taxonomia = () => {
  const {taxonomiak} = useApiContext();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTaxonomias = taxonomiak.filter((taxonomia) =>
    taxonomia.elnevezes.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="taxonomiaLista">
      <h2>Taxonómia lista</h2>
      <input
        className='taxonomiaKereso'
        type="text"
        placeholder="Keresés elnevezés alapján"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Taxonómia ID</th>
            <th>Elnevezés</th>
            <th>Műveletek</th>
          </tr>
        </thead>
        <tbody>
        {
             filteredTaxonomias.map((elem, index) => {
              return <TaxonomiaSorok elem={elem} key={index} index={index}/>
             })
          }
        </tbody>
      </table>
    </div>
  );
};

export default Taxonomia;
