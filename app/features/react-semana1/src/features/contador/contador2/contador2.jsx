import { CONTADOR_TEXT } from "../constants/contador.constants.js";
import useContador from "../hooks/useContador.js";

export function Contador2({ contador, setContador }) {
  const { handleDecrement } = useContador(setContador);

  return (
    <>
      <h2>{CONTADOR_TEXT.TITLE}</h2>
      <p>{contador}</p>
      <button
        onClick={handleDecrement}
        disabled={contador <= CONTADOR_TEXT.MIN_VALUE}
      >
        {CONTADOR_TEXT.DECREMENT}
      </button>
    </>
  );
}
