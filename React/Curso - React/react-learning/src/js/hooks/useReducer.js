import { useReducer } from "react";
import "../hooks/useReducer.css";

export default function FormReducer() {
  // The function responsible for changing the states values
  // Accepts as paremeters the states object, that have all the manipulated states
  // And de action object, that is a settings object about which state are goin to be changed

  const reducer = (state, action) => {
    switch (action.type) {
      case "set-username":
        return { ...state, username: action.input };

      case "set-email":
        return { ...state, email: action.input };

      case "set-phone":
        return { ...state, phone: action.input };

      default:
        return state;
    }
  };

  // The initial state value object, of all states monitored by the reducer function.
  // Each, property of this object is a single state:

  const initialUserInfo = {
    username: "",
    email: "",
    phone: "",
  };

  // This hook allows us manipulate multiple states, connected with each other, in a more organized way:

  const [userinfo, dispatch] = useReducer(reducer, initialUserInfo);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleUserInfoChange = (event) => {
    // Desestructuring the properties of the event object:
    const { name, value } = event.target;

    // The execution of the reducer function. Accept, as an argument, the action object with the properties you use in the switch case.
    dispatch({ type: `set-${name}`, input: value });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        name="username"
        value={userinfo.username}
        onChange={(e) => handleUserInfoChange(e)}
        autoComplete="off"
      />
      <input
        type="text"
        name="email"
        value={userinfo.email}
        onChange={(e) => handleUserInfoChange(e)}
        autoComplete="off"
      />
      <input
        type="text"
        name="phone"
        value={userinfo.phone}
        onChange={(e) => handleUserInfoChange(e)}
        autoComplete="off"
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
