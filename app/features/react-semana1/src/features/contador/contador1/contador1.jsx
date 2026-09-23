import useContador from "../hooks/useContador.js";
import { CONTADOR_TEXT } from "../constants/contador.constants.js";

export function Contador1({ contador, setContador }) {
  const { handleIncrement, handleDecrement } =
    useContador(setContador);

  return (
    <>
      <h2>Contador React</h2>
      <p>{contador}</p>
      <button
        onClick={
          contador < CONTADOR_TEXT.MAX_VALUE
            ? handleIncrement
            : null
        }
      >
        {CONTADOR_TEXT.INCREMENT}
      </button>
      <button
        onClick={
          contador > CONTADOR_TEXT.MIN_VALUE
            ? handleDecrement
            : null
        }
      >
        {CONTADOR_TEXT.DECREMENT}
      </button>
    </>
  );
}
