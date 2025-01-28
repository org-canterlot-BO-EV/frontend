import React from "react";
import AdminNav from "./AdminNav";
import ProgramFelvitelForm from "./ProgramFelvitelForm";
import NavBarFelso from "./NavBarFelso";

function AdminAlap() {
  return (
    <>
    <div className="adminTarolo"> 
    <NavBarFelso/>
    <div className="adminFelulet">
      <AdminNav />
      <ProgramFelvitelForm />
    </div>
    </div>
    </>
  );
}

export default AdminAlap;
