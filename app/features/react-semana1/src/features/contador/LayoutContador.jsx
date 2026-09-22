import { useState } from "react";
import { Contador1 } from "./contador1/contador1.jsx";
import { Contador2 } from "./contador2/contador2.jsx";
import { Contador3 } from "./contador3/contador3.jsx";
import { CONTADOR_TEXT } from "./constants/contador.constants.js";

export function LayoutContador() {
  const [counter, setContador] = useState(
    CONTADOR_TEXT.MIN_VALUE
  );

  /*
    function handleIncrement() {
        counter >= MAX_VALUE
            ? setCount(MAX_VALUE)
            : setCount(prev => prev + INCREMENT_VALUE)
    }

    function handleDecrement() {
        counter <= MIN_VALUE
            ? setCount(MIN_VALUE)
            : setCount(prev => prev - DECREMENT_VALUE)
    */

  return (
    <>
      <Contador1
        counter={counter}
        setCount={setContador}
      />
      <Contador2
        count={counter}
        setCount={setContador}
      />
      <Contador3
        count={counter}
        setCount={setContador}
      />
    </>
  );
}
