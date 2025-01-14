import React from 'react'
import NavProgramok from './NavProgramok'
import useApiContext from '../../contexts/ApiContext'

function Navigacio() {
    const { programTipusok } = useApiContext();

  return (
    <div className="navigacio">
      <div>
        <img src="https://chromestylehungary.com/img/96684/tex_lil/tex_lil.jpg" alt="logo" />
        <h1>Canterlot</h1>
      </div>
      <div className="nav_menu">
        <h1>Hírek</h1>
        <h1>Programok</h1>
        <h1>Profilom</h1>
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
