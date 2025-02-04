import React from 'react'

function TaxonomiaSorok(props) {
    const handleDelete = () => {
        //KELL
      };
    return (
        <>
          <tr key={props.index}>
                    <td>{props.elem.taxonomia_id}</td>
                    <td>{props.elem.elnevezes}</td>
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

export default TaxonomiaSorok
