import React from 'react'

function ProgramokSorok(props) {
    const handleDelete = () => {
        //KELL
      };
    
      const handleEdit = () => {
        //KELL
      };
    
  
    return (
    <>
      <tr key={props.index}>
                <td>{props.elem.program_nev}</td>
                <td>{props.elem.program_ar}</td>
                <td>{props.elem.program_datum}</td>
                <td>{props.elem.foglalas_kezdete}</td>
                <td>{props.elem.foglalas_vege}</td>
                <td>{props.elem.db}</td>
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

export default ProgramokSorok
