// import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App.js";
// //import Menu from './tests/Lists';
// //import NeymarClubs from './tests/Lists';
// import MyForm from "./tests/Forms";
// //import MultiForm from './tests/MultiForms';
// import MyMultiForm from "./tests/MyMultiForm";
// //import ReactSelectForm from './tests/ReactSelectForm';
// //import TodoApp from './tests/Memo';
// import SelectSinger from "./tests/hooks/useState.js";
// //import Comp4 from './tests/hooks/useContext.js';
// import Comp1 from "./tests/hooks/useContext.js";
// import RendersCount from "./tests/hooks/useRef.js";
// import UserForm from "./tests/hooks/useRef.js";
// import FormReducer from "./tests/hooks/useReducer.js";
//import FactorialCalc from './tests/hooks/useEffect.js';
//import Timer from './tests/hooks/useEffect.js';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm/>);

// const root2 = ReactDOM.createRoot(document.getElementById('root-2'));
// root2.render(<MyMultiForm />)

// const root3 = ReactDOM.createRoot(document.getElementById('root-3'));
// root3.render(<SelectSinger />)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(App);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
