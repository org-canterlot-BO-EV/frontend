import React from 'react'
import NavProgramok from './NavProgramok'
import useApiContext from '../../contexts/ApiContext'
import { Link } from 'react-router-dom';

function VendegNav() {
    const { programTipusok } = useApiContext();
  
    return (
    <div className="navigacio">
        <img src="https://chromestylehungary.com/img/96684/tex_lil/tex_lil.jpg" alt="logo" />
        <h1><Link to="/">Canterlot</Link></h1>
      <div className="nav_menu">
        <h1><a href="">Hírek</a></h1>
        <h1>Programok</h1>
        <h1><Link to="/bejelentkezes">Bejelentkezés</Link></h1>
        <div className="nav_legordulo">
            {programTipusok.map((program) => {
            return <NavProgramok program={program.elnevezes} key={program.programtipus_id} />;
            })}
        </div>
        
      </div>
    </div>
  )
}

export default VendegNav
