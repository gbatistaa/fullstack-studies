import { createContext, useContext, useReducer, useRef } from "react";
import { reducer } from "./reducer";
import { buildActions } from "./build-actions";

export const initialState = {
  counter: 0,
  loading: false,
};

const Context = createContext();

export function CounterContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { current: actions } = useRef(buildActions(dispatch));

  return (
    <Context.Provider value={[state, actions]}>{children}</Context.Provider>
  );
}

export function useCounterContext() {
  const context = useContext(Context);

  if (typeof context === "undefined") {
    throw new Error(
      "You have to use useCounterContext inside <CounterContextProvider />"
    );
  }

  return [...context];
}
