import React, { useState, useEffect } from 'react';

const Taxonomia = () => {
  const [taxonomias, setTaxonomias] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTaxonomias = taxonomias.filter((taxonomia) =>
    taxonomia.elnevezes.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (index) => {
    const updatedTaxonomias = taxonomias.filter((_, i) => i !== index);
    setTaxonomias(updatedTaxonomias);
  };
  
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
          {filteredTaxonomias.length > 0 ? (
            filteredTaxonomias.map((taxonomia, index) => (
              <tr key={taxonomia.taxonomia_id}>
                <td>{taxonomia.taxonomia_id}</td>
                <td>{taxonomia.elnevezes}</td>
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
              <td colSpan="3">Nincsenek találatok</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Taxonomia;
