import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthContext from "../../contexts/AuthContext";


export default function Bejelentkezes() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { loginReg, errors } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const adat = {
      email: email,
      password: password,
    };
    console.log(adat);

    loginReg(adat, "/login");
  };

  return (
    <div className="bejelentkezes">
      <h1>Bejelentkezés</h1>
      <form onSubmit={handleSubmit}>
        <div className="bejelentkezes-form">
          <label htmlFor="email" className="form-label">
            <p>Email</p>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="form-control"
            id="email"
            placeholder="email"
            name="email"
          />
        </div>
        <div>
          {errors.email && (
            <span className="text-danger">{errors.email[0]}</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="pwd" className="form-label">
            <p>Jelszó</p>
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="form-control"
            id="pwd"
            placeholder="jelszó"
            name="pwd"
          />
          <div>
            {errors.password && (
              <span className="text-danger">{errors.password[0]}</span>
            )}
          </div>
        </div>

        <div className=" text-center">
          <button type="submit" className="btn btn-primary w-100">
            Bejelentkezés
          </button>

          <p>
            <Link className="nav-link text-info" to="/regisztracio">
              Regisztráció
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}