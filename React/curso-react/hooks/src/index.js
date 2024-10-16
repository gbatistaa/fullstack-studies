import React from "react";
import ReactDOM from "react-dom/client";
import "./";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import UseCallback from "./hooks/useCallback";
// import UseMemo from "./hooks/useMemo";
// import UseContext from "./hooks/components/useContext.jsx";
// import App from "./App.js";
// import AppContext from "./hooks/contexts/index.jsx";
// import Div from "./hooks/components/Div.jsx";
// import App from "./App.js";
// import ContextReducer from "./hooks/contextReducer.jsx";
// import App from "./templates/App.jsx";
// import Lazy from "./hooks/ReactLazy/LazyComponent.jsx";
// import LazyCompnent from "./hooks/ReactLazy/LazyComponent.jsx";
import Home from "./hooks/contextAPI/templates/Home/index.jsx";
import { CounterContextProvider } from "./hooks/contextAPI/contexts/CounterContext/index.jsx";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CounterContextProvider>
    <Home />
  </CounterContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
