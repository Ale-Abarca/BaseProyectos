import { CONTADOR_TEXT } from "../constants/contador.constants.js";
import useContador from "../hooks/useContador.js";

export function Contador2({ count, setCount }) {
  const { handleDecrement } = useContador(setCount);

  return (
    <>
      <h2>{CONTADOR_TEXT.TITLE}</h2>
      <p>{count}</p>
      <button
        onClick={handleDecrement}
        disabled={count <= CONTADOR_TEXT.MIN_VALUE}
      >
        {CONTADOR_TEXT.DECREMENT}
      </button>
    </>
  );
}
