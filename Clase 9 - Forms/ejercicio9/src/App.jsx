import Form from "./form/Form";

import { useState } from "react";
import "./App.css";

let autoId = 0;

function App() {
  
  const [arrayParticipantes, setArrayParticipantes] = useState([]);
  
  const handleSubmit = (objValue) => {
    setArrayParticipantes([...arrayParticipantes,{id: autoId++, data: objValue}]);
    console.log(arrayParticipantes);
  };
  
  return (
    <>
      <h2>Formulario</h2>
      <Form onSubmit={handleSubmit} />
      <h2>Ingresos</h2>
      <div className="ingresos">
        {arrayParticipantes.map((participante) => {
          return (
            <div className="box" key={arrayParticipantes.id}>
              <p>Nombre: {participante.data.nombre}</p>
              <p>Numero Favorito: {participante.data.numero}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
