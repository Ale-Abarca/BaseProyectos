import useContador from "../hooks/useContador.js";
import { CONTADOR_TEXT } from "../constants/contador.constants.js";

export function Contador1({ counter, setCount }) {
  const { handleIncrement, handleDecrement } =
    useContador(setCount);

  return (
    <>
      <h2>Contador React</h2>
      <p>{counter}</p>
      <button
        onClick={
          counter < CONTADOR_TEXT.MAX_VALUE
            ? handleIncrement
            : null
        }
      >
        {CONTADOR_TEXT.INCREMENT}
      </button>
      <button
        onClick={
          counter > CONTADOR_TEXT.MIN_VALUE
            ? handleDecrement
            : null
        }
      >
        {CONTADOR_TEXT.DECREMENT}
      </button>
    </>
  );
}
