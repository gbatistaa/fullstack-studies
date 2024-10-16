import { createContext, useReducer, useContext, useRef } from "react";
import "./css/reducer.css";
// This file is to learn how to use useContext with useReducer

//actions.js

export const actions = {
  CHANGE_TITLE: "CHANGE_TITLE",
};

//data.js

export const globalState = {
  title: "o titulo",
  body: "o body do contexto",
  counter: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_TITLE: {
      console.log("Mudar título");
      return { ...state, title: action.payload };
    }

    default:
      break;
  }
  return { ...state };
};

export const Context = createContext();

export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  const changeTitle = (payload) => {
    dispatch({ type: actions.CHANGE_TITLE, payload });
  };

  return (
    <Context.Provider value={{ state, changeTitle }}>
      {children}
    </Context.Provider>
  );
};

//H1.index.jsx

export const H1 = () => {
  const context = useContext(Context);
  const inputRef = useRef();

  return (
    <>
      <h1 onClick={() => context.changeTitle(inputRef.current.value)}>
        {context.state.title}
      </h1>
      <input type="text" ref={inputRef} />
    </>
  );
};

// App.jsx

export default function ContextReducer() {
  return (
    <AppContext>
      <div>
        <H1 />
      </div>
    </AppContext>
  );
}
