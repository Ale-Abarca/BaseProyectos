import { CONTADOR_TEXT } from "../constants/contador.constants"
import useContador from "../hooks/useContador.js"
import { useState } from "react"
import users from "../hooks/users"

export function Contador3({ contador, setContador }) {

    const { handleIncrement } = useContador(setContador)
    const { handleinputChange } = users()
    const [nombre, setNombre] = useState("")
    const [edad, setEdad] = useState("")

    return (
        <>
            <h2>{CONTADOR_TEXT.TITLE}</h2>
            <p>{contador}</p>

            <input
                type="text"
                placeholder={CONTADOR_TEXT.PLACEHOLDER_NAME}
                value={nombre}
                onChange={(e) => handleinputChange(e, setNombre)}
            />
            <input
                type="number"
                placeholder={CONTADOR_TEXT.PLACEHOLDER_EDAD}
                value={edad}
                onChange={(e) => handleinputChange(e, setEdad)}
            />
            <button onClick={() => { handleIncrement }} disabled={nombre === "" || edad === ""}>
                {CONTADOR_TEXT.INCREMENT}
            </button>
        </>
    )
}
  
    

  {/*
  return (
    <>
      <h2>{CONTADOR_TEXT.TITLE}</h2>
      <p>{count}</p>
      <input
        type="text"
        id="inputNombre"
      />
      <input
        type="number"
        id="inputEdad"
      />
      <button
        onClick={() => {
          const inputNombre =
            document.getElementById("inputNombre");
          const inputEdad =
            document.getElementById("inputEdad");
          console.log(inputEdad.value);
          if (
            inputNombre.value !== "" &&
            inputEdad.value !== ""
          ) {
            handleIncrement();
          }
        }}
        disabled={count >= CONTADOR_TEXT.MAX_VALUE}
      >
        {CONTADOR_TEXT.INCREMENT}
      </button>
    </>
  );
}
  
*/}
