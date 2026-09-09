import { useState } from 'react'
import { CONTADOR_TEXT } from "./constants/contador.constants.js"

export function LayoutContador() {

    const {
        INCREMENT,
        DECREMENT,
        MAX_VALUE,
        MIN_VALUE,
        INCREMENT_VALUE,
        DECREMENT_VALUE,
        TITLE
    } = CONTADOR_TEXT

    const [counter, setCount] = useState(MIN_VALUE)

    function handleIncrement() {
        counter >= MAX_VALUE
            ? setCount(MAX_VALUE)
            : setCount(prev => prev + INCREMENT_VALUE)
    }

    function handleDecrement() {
        counter <= MIN_VALUE
            ? setCount(MIN_VALUE)
            : setCount(prev => prev - DECREMENT_VALUE)
    }

    return (
        <>
            <h2>{TITLE}</h2>

            <p>{counter}</p>

            <button
                onClick={counter < MAX_VALUE ? handleIncrement : null}
            >
                {INCREMENT}
            </button>

            <button
                onClick={counter > MIN_VALUE ? handleDecrement : null}
            >
                {DECREMENT}
            </button>
        </>
    )
}