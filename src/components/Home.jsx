// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import appFirebase from "../credenciales";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(appFirebase);

// eslint-disable-next-line react/prop-types
const Home = ({ correoUsuario }) => {
  // Lista de ejercicios con sus pasos
  // eslint-disable-next-line no-unused-vars
  const [ejercicios, setEjercicios] = useState([
    {
      nombre: "joahan gutierrez Alvaro",
      pasos: [
        "Colócate boca abajo, con las manos a la altura de los hombros.",
        "Eleva tu cuerpo usando la fuerza de tus brazos.",
        "Baja tu cuerpo sin tocar el suelo y repite.",
      ],
    },
    {
      nombre: "Leandro",
      pasos: [
        "De pie, con las piernas separadas al ancho de los hombros.",
        "Baja tus caderas como si fueras a sentarte en una silla.",
        "Regresa a la posición inicial y repite.",
      ],
    },
    {
      nombre: "Ceci ",
      pasos: [
        "Acuéstate boca arriba con las rodillas dobladas y los pies apoyados en el suelo.",
        "Coloca las manos detrás de la cabeza sin entrelazar los dedos.",
        "Eleva el torso hacia las rodillas, manteniendo la espalda baja en el suelo.",
        "Regresa a la posición inicial y repite.",
      ],
    },
    {
      nombre: "Zancadas",
      pasos: [
        "De pie, con las piernas juntas.",
        "Da un paso adelante con una pierna y dobla ambas rodillas formando un ángulo de 90 grados.",
        "La rodilla trasera debe casi tocar el suelo.",
        "Regresa a la posición inicial y alterna con la otra pierna.",
      ],
    },
    {
      nombre: "Plancha",
      pasos: [
        "Acuéstate boca abajo.",
        "Eleva tu cuerpo usando tus antebrazos y puntas de los pies como apoyo.",
        "Mantén tu cuerpo recto y alineado.",
        "Sostén la posición el tiempo que puedas.",
      ],
    },
    {
      nombre: "Burpees",
      pasos: [
        "De pie, baja al suelo en posición de cuclillas.",
        "Apoya las manos en el suelo y estira las piernas hacia atrás rápidamente, quedando en posición de flexión.",
        "Realiza una flexión y regresa las piernas hacia adelante.",
        "Salta y extiende los brazos hacia arriba al finalizar.",
      ],
    },
    {
      nombre: "Elevación de piernas",
      pasos: [
        "Acuéstate boca arriba con las manos debajo de los glúteos.",
        "Eleva las piernas juntas y rectas hacia el techo.",
        "Baja las piernas lentamente sin que toquen el suelo.",
        "Repite el movimiento.",
      ],
    },
    {
      nombre: "Saltos con cuerda",
      pasos: [
        "Toma los mangos de una cuerda con ambas manos.",
        "Comienza a girar la cuerda con movimientos de muñeca.",
        "Salta cada vez que la cuerda esté cerca de tus pies.",
        "Mantén un ritmo constante.",
      ],
    },
  ]);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5">
        Bienvenido {correoUsuario}{" "}
        <button className="btn btn-primary" onClick={() => signOut(auth)}>
          Logout
        </button>{" "}
      </h2>
      <h3 className="mb-4">Ejercicios y Pasos:</h3>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Ejercicio</th>
            <th>Pasos</th>
          </tr>
        </thead>
        <tbody>
          {ejercicios.map((ejercicio, idx) => (
            <tr key={idx}>
              <td>{ejercicio.nombre}</td>
              <td>
                <ul>
                  {ejercicio.pasos.map((paso, pasoIdx) => (
                    <li key={pasoIdx}>{paso}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
