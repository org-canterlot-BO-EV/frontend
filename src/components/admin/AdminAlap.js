import React from "react";
import { Outlet } from "react-router-dom";
import AdminNav from "./AdminNav";
import NavBarFelso from "./NavBarFelso";


function AdminAlap() {
  return (
    <div className="adminTarolo dark-mode">
      <NavBarFelso />
      <div className="adminFelulet">
        <AdminNav /> 
        <div className="adminTartalom">
        <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default AdminAlap;
