import React, { useState, useEffect } from "react";

const ProgramLista = () => {
  const [programok, setProgramok] = useState([]);
  const [sortOption, setSortOption] = useState("none");

  const handleDelete = (index) => {
    //KELL
  };

  const handleEdit = (program) => {
    //KELL
  };

  const handleSortChange = (event) => {
    const sortOption = event.target.value;
    setSortOption(sortOption);

    let sortedPrograms = [...programok];

    switch (sortOption) {
      case "alphabetical":
        sortedPrograms.sort((a, b) => a.program_nev.localeCompare(b.program_nev));
        break;
      case "price_asc":
        sortedPrograms.sort((a, b) => a.program_ar - b.program_ar);
        break;
      case "price_desc":
        sortedPrograms.sort((a, b) => b.program_ar - a.program_ar);
        break;
      case "date_asc":
        sortedPrograms.sort((a, b) => new Date(a.program_datum) - new Date(b.program_datum));
        break;
      case "date_desc":
        sortedPrograms.sort((a, b) => new Date(b.program_datum) - new Date(a.program_datum));
        break;
      default:
        break;
    }

    setProgramok(sortedPrograms);
  };

  return (
    <div className="programLista">
      <h2>Programok kezelése</h2>
      <select value={sortOption} onChange={handleSortChange} className="programSzuro">
        <option value="none">Nincs rendezés</option>
        <option value="alphabetical">Rendezés név szerint</option>
        <option value="price_asc">Rendezés ár szerint növekvő</option>
        <option value="price_desc">Rendezés ár szerint csökkenő</option>
        <option value="date_asc">Rendezés dátum szerint legközelebbi</option>
        <option value="date_desc">Rendezés dátum szerint legtávolabbi</option>
      </select>

      <table>
        <thead>
          <tr>
            <th>Program Név</th>
            <th>Leírás</th>
            <th>Ár</th>
            <th>Dátum</th>
            <th>Foglalás Kezdete</th>
            <th>Foglalás Vége</th>
            <th>Műveletek</th>
          </tr>
        </thead>
        <tbody>
          {programok.length > 0 ? (
            programok.map((program, index) => (
              <tr key={program.program_id}>
                <td>{program.program_nev}</td>
                <td>{program.program_leiras}</td>
                <td>{program.program_ar}</td>
                <td>{program.program_datum}</td>
                <td>{program.foglalas_kezdete}</td>
                <td>{program.foglalas_vege}</td>
                <td>
                  <button className="editBtn" onClick={() => handleEdit(program)}>
                    ✏️
                  </button>
                  <button className="deleteBtn" onClick={() => handleDelete(index)}>
                    🗑️
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">Nincsenek elérhető programok</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProgramLista;
