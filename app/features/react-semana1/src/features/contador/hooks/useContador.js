import { CONTADOR_TEXT } from "../constants/contador.constants.js";

function useContador(setContador) {
  function handleIncrement() {
    setContador((previousCount) =>
      previousCount + CONTADOR_TEXT.INCREMENT_VALUE
    );
  }

  function handleDecrement() {
    setContador((previousCount) =>
      previousCount - CONTADOR_TEXT.DECREMENT_VALUE
    );
  }

  function handleInputChange(e, setFunction) {
    setFunction(e.target.value);
  }

  return {
    handleIncrement,
    handleDecrement,
    handleInputChange
  };
}

export default useContador;