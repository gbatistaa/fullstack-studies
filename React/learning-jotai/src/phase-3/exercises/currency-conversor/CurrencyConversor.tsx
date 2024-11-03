import { atom, useAtom } from "jotai";
import React, { useRef } from "react";

const dolarAtom = atom(100);

const convertedCurrencyAtom = atom(
  (get) => parseFloat((get(dolarAtom) / 0.85).toFixed(2)),
  (get, set, newValue: number) => {
    // updates the new value in euros
    set(dolarAtom, newValue); // syncronizes the euro value with the dolar value
  },
);

function CurrencyConversor(): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dolar] = useAtom(dolarAtom);
  const [convertedDolar, setConvertedDolar] = useAtom(convertedCurrencyAtom);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { current: input } = inputRef;
    // if the input element exists
    if (input) {
      setConvertedDolar(parseFloat(parseFloat(input.value).toFixed(2)));
    }
  };

  return (
    <section>
      <h1>CURRENCY CONVERSOR</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h3>{dolar} $</h3>
        <h3>{convertedDolar} €</h3>
      </div>
    </section>
  );
}

export default CurrencyConversor;
