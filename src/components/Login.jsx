/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Imagen from "../assets/loginvector.png";
import ImageProfile from "../assets/profile1.jpg";
import appFirebase from "../credenciales";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
const auth = getAuth(appFirebase);

const Login = () => {
  const [registrando, setRegistrando] = useState(false);

  const functAutenticacion = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;

    try {
      let userCredential;
      if (registrando) {
        userCredential = await createUserWithEmailAndPassword(auth, correo, contraseña);
      } else {
        userCredential = await signInWithEmailAndPassword(auth, correo, contraseña);
      }
      const token = await userCredential.user.getIdToken();
      console.log("Token JWT:", token);
    } catch (error) {
      if (registrando) {
        alert("Asegurese que la contraseña tenga mas de 6 caracteres");
      } else {
        alert("El correo o la contraseña son incorrectas");
      }
    }
  };

  return (
    <div className="container">
      <div className="row">
        {/* columna mas pequeña para el formulario */}
        <div className="col-md-4">
          <div className="padre">
            <div className="card card-body shadow-lg">
              <img src={ImageProfile} alt="" className="estilo-profile" />
              <form onSubmit={functAutenticacion}>
                <input
                  type="text"
                  placeholder="Ingresar Email"
                  className="cajatexto"
                  id="email"
                />
                <input
                  type="password"
                  placeholder="Ingresar contraseña"
                  className="cajatexto"
                  id="password"
                />
                <button className="btnform">
                  {registrando ? "Registrate" : "Inicia sesion"}
                </button>
              </form>
              <h4 className="texto">
                {registrando ? "si ya tienes cuenta" : "No tienes cuenta"}
                <button
                  className="btnswitch"
                  onClick={() => setRegistrando(!registrando)}
                >
                  {registrando ? "Inicia sesion" : "Registrate"}
                </button>
              </h4>
            </div>
          </div>
        </div>
        {/* columna mas grande */}
        <div className="col-md-8">
          <img src={Imagen} alt="" className="tamaño-imagen" />
        </div>
      </div>
    </div>
  );
};

export default Login;
