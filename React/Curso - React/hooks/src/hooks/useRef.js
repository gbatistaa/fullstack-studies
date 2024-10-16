// This hook acesses the DOM directy, storing a mutable value , so it doesn't cause re-renders:

import { useState, useEffect, useRef } from "react";

// Here is a component that counts how many renders happen when the user types on the input:

function RendersCount() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current += 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>Renders: {count.current} </p>
    </>
  );
}

export default function UserForm() {
  const userRef = useRef(null);
  const emailRef = useRef(null);
  const cpfRef = useRef(null);

  const count = useRef(0);

  useEffect(() => {
    count.current += 1;
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      user: userRef.current.value,
      email: emailRef.current.value,
      cpf: cpfRef.current.value,
    });
  };

  return (
    <>
      <h1>Formulário</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" ref={userRef} name="username" autoComplete="off" />
        <input type="text" ref={emailRef} name="email" autoComplete="off" />
        <input type="text" ref={cpfRef} name="cpf" autoComplete="off" />
        <input type="submit" />
      </form>
      <h1>renders: {count.current}</h1>
    </>
  );
}
