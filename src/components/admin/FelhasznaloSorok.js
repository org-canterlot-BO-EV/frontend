import React from 'react'

function FelhasznaloSorok(props) {
    const handleDelete = () => {
        
      };
  
    return (
    <>
      <tr key={props.index}>
                <td>{props.elem.felhasznalo_nev}</td>
                <td>{props.elem.vezetek_nev}</td>
                <td>{props.elem.kereszt_nev}</td>
                <td>{props.elem.szul_datum}</td>
                <td>{props.elem.telefon}</td>
                <td>{props.elem.email}</td>
                <td>{props.elem.jogosultsag_tipus}</td>
                <td>
                  <button 
                    className="deleteBtn" 
                    onClick={() => handleDelete()}
                  >
                    🗑️ Törlés
                  </button>
                </td>
              </tr>
    </>
  )
}

export default FelhasznaloSorok
