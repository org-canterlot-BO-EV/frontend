import React from 'react'
import NavProgramok from './NavProgramok'
import useApiContext from '../../contexts/ApiContext'
import { Link } from 'react-router-dom';

function Navigacio() {
    const { programTipusok } = useApiContext();

  return (
    <div className="navigacio">
        <img src="./kepek/logo.png" alt="logo" />
        <h1><Link to="/">Canterlot</Link></h1>
      <div className="nav_menu">
        <h1><a href="">Hírek</a></h1>
        <h1>Programok</h1>
        <h1><Link to="/bejelentkezes">Profilom</Link></h1>
        <div className="nav_legordulo">
            {programTipusok.map((program) => {
            return <NavProgramok program={program.elnevezes} key={program.programtipus_id} />;
            })}
        </div>
        
      </div>
    </div>
  )
}

export default Navigacio
