// Use context is the simpler way to acess a state of a component in all of the nested components:
// in his case even though the component 2 did not need the state, it had to pass through it
// This is the solution:

import { useState, createContext, useContext } from "react";

const UserContext = createContext();

// Always import the parent component of the nested elements

export default function Comp1() {
  const [user] = useState("Gabriel");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}`}</h1>
      <Comp2 />
    </UserContext.Provider>
  );
}

function Comp2() {
  return (
    <>
      <h1>Component 2</h1>
      <Comp3 />
    </>
  );
}

function Comp3() {
  return (
    <>
      <h1>Component 3</h1>
      <Comp4 />
    </>
  );
}

function Comp4() {
  const userCont = useContext(UserContext);

  return <h1>Hello {userCont.user}</h1>;
}
