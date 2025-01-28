import React from 'react'
import Navigacio from '../components/felhasznalo/Navigacio'
import { Outlet } from 'react-router-dom'
import VendegNav from '../components/felhasznalo/VendegNav'

function VendegLayout() {
  return (
    <div>
      <VendegNav/>
      <Outlet/>
    </div>
  )
}

export default VendegLayout
