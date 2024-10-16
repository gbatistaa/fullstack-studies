import "./css/useCallback.css";
import React, { useState, useCallback } from "react";

// React memo: memorizes the COMPONENT and doesn't re-renders it if it doesn't change
// useful to save memory management, don't use it if you don't need it

const Button = React.memo(({ incrementButton }) => {
  console.log("Filho renderizou");
  return <button onClick={() => incrementButton(10)}>+</button>;
});

export default function UseCallback() {
  const [counter, setCounter] = useState(0);

  // function that increments the counter a number especified

  // Use callback syntax: the function and the dependencies array
  // useCallback(fn, [counter]);

  const incrementCounter = useCallback((num) => {
    setCounter((prevCounter) => prevCounter + num);
  }, []);

  // everytime that a state changes, the component is re-rendered on the screen
  // so as the functions inside it, are recreated, but if the function does not change
  // doesn't make sense to recreate it everytime,
  // so to avoid memory waste we use useCallback

  console.log("Pai renderizou");

  return (
    <div className="use-callback">
      <p>Use Callback</p>
      <h1>Contador: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
}
