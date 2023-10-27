import { useState } from "react";
import appFirebase from "../src/credenciales";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import LogRocket from 'logrocket';

const auth = getAuth(appFirebase);
LogRocket.init('tsp2pu/med_appoint');
import Login from "../src/components/Login";
import Home from "../src/components/Home";
import "./App.css";
function App() {
  const [usuario, setUsuario] = useState(null);
  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase);
    } else {
      setUsuario(null);
    }
  });
  if (usuario) {
    LogRocket.identify('joahan.alvaro8@gmail.com', {
      name: 'Joahan_Gutierrez_Alvaro',
      email: 'joahan.alvaro8@gmail.com',
    });
  }

  return (
    <div>{usuario ? <Home correoUsuario={usuario.email} /> : <Login />}</div>
  );
}

export default App;
