import { atom, useAtom } from "jotai";
import React, { useRef } from "react";

const celsiusAtom = atom(25.3);

// Function that converts celsius to fahrenheit:
const celciusToFahrenheit = (celsius: number): number => {
  const fahrenheit = parseFloat(((celsius * 9) / 5 + 32).toFixed(2));
  return fahrenheit;
};

// Atom that updates the celsius value
// and automatically convert its value to fahrenheit:
const fahrenheitAtom = atom(
  (get) => celciusToFahrenheit(get(celsiusAtom)),
  (get, set, newTemperature: number) => {
    set(celsiusAtom, newTemperature);
  },
);

//
function TemperatureConversor(): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const [celsius] = useAtom(celsiusAtom);
  const [fahrenheit, setFahrenheit] = useAtom(fahrenheitAtom);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { current: input } = inputRef;
    if (input) {
      setFahrenheit(parseFloat(input.value));
    }
  };

  return (
    <>
      <div>
        <h1>Temperature Conversor</h1>
        <h3>{celsius} °C</h3>
        <h3>{fahrenheit} °F</h3>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" ref={inputRef} placeholder="Celsius" />
          <button type="submit">Sumbit</button>
        </form>
      </div>
    </>
  );
}

export default TemperatureConversor;
