import React, { useState } from "react";

import useAuthContext from "../contexts/AuthContext";

import { useNavigate } from "react-router-dom";

/* felhasznalo_nev, jelszo, vezetek_nev, kereszt_nev, szul_datum, telefon, email */

export default function Regisztracio() {
  const [felhasznalo_nev, setFelhasznaloNev] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [jelszo_ujra, setJelszoUjra] = useState("");
  const [vezetek_nev, setVezetekNev] = useState("");
  const [kereszt_nev, setKeresztNev] = useState("");
  const [szul_datum, setSzulDatum] = useState("");
  const [telefon, setTelefon] = useState("");

  const navigate = useNavigate();

  const { loginReg, errors } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const adat = {
      felhasznalo_nev: felhasznalo_nev,
      email: email,
      password: password,
      jelszo_ujra: jelszo_ujra,
      vezetek_nev: vezetek_nev,
      kereszt_nev: kereszt_nev,
      szul_datum: szul_datum,
      telefon: telefon,
    };
    console.log(adat);
    loginReg(adat, "/register");
  };

  return (
    <div className="bejelentkezes">
      <h1>Regisztráció</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            <p>Felhasználó Név</p>
          </label>
          <input
            type="text"
            value={felhasznalo_nev}
            onChange={(e) => {
              setFelhasznaloNev(e.target.value);
            }}
            id="name"
            placeholder="felhasználó név"
            name="name"
          />
          <div>
            {errors.felhasznalo_nev && <span>{errors.felhasznalo_nev[0]}</span>}
          </div>
        </div>
        <div>
          <label htmlFor="email">
            <p>Email</p>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            id="email"
            placeholder="email"
            name="email"
          />
          <div>{errors.email && <span>{errors.email[0]}</span>}</div>
        </div>
        <div>
          <label htmlFor="pwd">
            <p>Jelszó</p>
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            id="pwd"
            placeholder="jelszó"
            name="pwd"
          />
          <div>{errors.password && <span>{errors.password[0]}</span>}</div>
        </div>
        <div>
          <label htmlFor="pwd2">
            <p>Jelszó újra</p>
          </label>
          <input
            type="password"
            value={jelszo_ujra}
            onChange={(e) => {
              setJelszoUjra(e.target.value);
            }}
            id="pwd2"
            placeholder="jelszó újra"
            name="pwd2"
          />
          <div>
            {errors.jelszo_ujra && <span>{errors.jelszo_ujra[0]}</span>}
          </div>
        </div>

        <div>
          <label htmlFor="vnev">
            <p>Vezeték Név</p>
          </label>
          <input
            type="text"
            value={vezetek_nev}
            onChange={(e) => {
              setVezetekNev(e.target.value);
            }}
            id="vnev"
            placeholder="vezeték név"
            name="vnev"
          />
          <div>
            {errors.vezetek_nev && <span>{errors.vezetek_nev[0]}</span>}
          </div>
        </div>

        <div>
          <label htmlFor="knev">
            <p>Kereszt Név</p>
          </label>
          <input
            type="text"
            value={kereszt_nev}
            onChange={(e) => {
              setKeresztNev(e.target.value);
            }}
            id="knev"
            placeholder="kereszt név"
            name="knev"
          />
          <div>
            {errors.kereszt_nev && <span>{errors.kereszt_nev[0]}</span>}
          </div>
        </div>

        <div>
          <label htmlFor="szdatum">
            <p>Születési Dátum</p>
          </label>
          <input
            type="date"
            value={szul_datum}
            onChange={(e) => {
              setSzulDatum(e.target.value);
            }}
            id="szdatum"
            name="szdatum"
          />
          <div>{errors.szul_datum && <span>{errors.szul_datum[0]}</span>}</div>
        </div>

        <div>
          <label htmlFor="telefon">
            <p>Telefonszám</p>
          </label>
          <input
            type="number"
            value={telefon}
            onChange={(e) => {
              setTelefon(e.target.value);
            }}
            id="telefon"
            name="telefon"
          />
          <div>{errors.telefon && <span>{errors.telefon[0]}</span>}</div>
        </div>
        <div>
          <button type="submit">Regisztrálok</button>
        </div>
      </form>
    </div>
  );
}
