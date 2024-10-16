import { useReducer } from "react";
import "./css/reducer.css";

const globalState = {
  title: "o titulo",
  body: "o body do contexto",
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "muda":
      console.log("Chamou muda com", action.payload);
      return { ...state, title: action.payload };

    case "inverter":
      console.log("Chamou inverter");
      const { title } = state;
      return { ...state, title: title.split("").reverse().join("") };

    default:
      break;
  }

  console.log("nenhuma action encontrada");

  //always return the previous state, to avoid application breaking:
  return { ...state };
};

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { counter, title } = state;

  return (
    <>
      <h1>
        {title} {counter}
      </h1>
      <button
        onClick={() =>
          dispatch({
            type: "muda",
            payload: new Date().toLocaleString("pt-BR"),
          })
        }
      >
        Click
      </button>
      <button onClick={() => dispatch({ type: "inverter" })}>Invert</button>
      <button onClick={() => dispatch({ type: "nada" })}>Nada</button>
    </>
  );
}
