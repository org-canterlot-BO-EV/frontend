import React from 'react'

function ProgramLegordulo(props) {
  return (
    <option key={props.programtipus_id } value={props.elnevezes}>{props.elnevezes}</option>
  )
}

export default ProgramLegordulo
