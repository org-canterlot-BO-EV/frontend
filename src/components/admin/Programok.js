import React, { useState, useEffect } from "react";
import ProgramokSorok from "./ProgramokSorok";
import useApiContext from "../../contexts/ApiContext";

const ProgramLista = () => {
  const {programok} = useApiContext();
  const [sortProgramok, setSortProgramok] = useState(programok);
  const [sortOption, setSortOption] = useState("none");
  
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

    setSortProgramok(sortedPrograms);
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
            <th>Ár</th>
            <th>Dátum</th>
            <th>Foglalás Kezdete</th>
            <th>Foglalás Vége</th>
            <th>Lefoglalt(db)</th>
            <th>Műveletek</th>
          </tr>
        </thead>
        <tbody>
        {
             sortProgramok.map((elem, index) => {
              return <ProgramokSorok elem={elem} key={index} index={index}/>
             })
          }
        </tbody>
      </table>
    </div>
  );
};

export default ProgramLista;
