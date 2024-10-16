// Criação de um custom hook
import { Button } from "../../components/Button/Button.jsx";
import { Heading } from "../../components/Button/Heading.jsx";
import { useCounterContext } from "../../contexts/CounterContext";
import "./styles.css";
import { useState, useEffect, useRef, createContext, useContext } from "react";

export default function Home() {
  const [state, actions] = useCounterContext();

  // useEffect(() => {
  //   // Ao colocar a action como um ref, não irácausar
  //   // renderização do componente pois é uma referência
  //   // previnindo de um loop infinito:

  //   actions.increase();
  //   return () => {};
  // }, [actions]);

  const handleError = () => {
    actions
      .asyncError()
      .then((response) => console.log(response))
      .catch((error) => console.log(error.name, ":", error.message));
  };

  return (
    <>
      <Heading />
      <div>
        <Button
          onButtonClick={() => actions.increase()}
          text={"Increase"}
        ></Button>
        <Button
          onButtonClick={() => actions.decrease()}
          text={"Decrease"}
        ></Button>
        <Button onButtonClick={() => actions.reset()} text={"Reset"}></Button>
        <Button
          onButtonClick={() => actions.setCounter({ counter: 10 })}
          text={"Set Counter to 10"}
        ></Button>
        <Button
          onButtonClick={() => actions.setCounter({ counter: 100 })}
          text={"Set Counter to 100"}
        ></Button>
        <Button
          isDisabled={state.loading}
          onButtonClick={() => actions.asyncIncrease()}
          text={"Async Increase"}
        ></Button>
        <Button
          isDisabled={state.loading}
          onButtonClick={() => handleError()}
          text={"Async Error"}
        ></Button>
      </div>
    </>
  );
}
