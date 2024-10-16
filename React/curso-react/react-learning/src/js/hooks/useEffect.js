import { useEffect } from "react";
import { useState } from "react";

// This hook allows you to perform side effects in your react components
// But his default behavior with no dependence is to execute the passed function in every render

// This function executes setTimeout every second:

export default function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (count === 59) {
        setCount(0);
      } else {
        setCount((currentCount) => currentCount + 1);
      }
    }, 1000);
  });

  // if you wanna put the effect just in the first render, pass "[]" as second argument to useEffect

  return <h1>Has passed {count} seconds</h1>;
}

// Here is a component with useEffect hook that is dependent on a state variable.
// Basically the trigger of the hook is the update of that state's value

function FactorialCalc() {
  //const [color, setColor] = useState("");
  const [number, setNumber] = useState(0);
  const [factorial, setFactorial] = useState(1);

  useEffect(() => {
    setFactorial(() => {
      let factorialResult = 1;
      for (let vetor = 1; vetor < number + 1; vetor++) {
        factorialResult *= vetor;
      }
      return factorialResult;
    });

    // If in your use effect there is some trash of info components

    return () => {
      console.log("executed before realoding");
    };
  }, [number]);

  return (
    <>
      <p style={{ fontSize: "4rem", fontWeight: "700" }}>Number: {number}</p>
      <button
        style={{ height: "50px", width: "120px" }}
        onClick={() => setNumber((currNumber) => currNumber + 1)}
      >
        Increase Number
      </button>
      <p style={{ fontSize: "2rem", fontWeight: "700" }}>
        The factorial of {number} is {factorial}
      </p>
    </>
  );
}
