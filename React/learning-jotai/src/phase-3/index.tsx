import { atom, useAtom } from "jotai";

/* A read-write Jotai atom is an atom that has an initial value
either independently defined or derived from the value of another atom
through the get function. It also has a set write function that allows
changing the value of another atom, making it possible to interconnect
and create a dependency between the values of the two atoms. */

const counterValueAtom = atom(20);

// readWriteCountAtom is fully dependent of counterValueAtom
// it just works as an interface of manipulating and changing
// the counterValueAtom's value

const readWriteCountAtom = atom(
  (get) => get(counterValueAtom),
  (get, set) => set(counterValueAtom, get(counterValueAtom) + 5),
);

function ReadWriteAtoms(): JSX.Element {
  const [counter, setCounter] = useAtom(readWriteCountAtom);

  return (
    <div>
      <h1 style={{ width: "190px", display: "flex", justifyContent: "center" }}>
        {counter}
      </h1>
      <button onClick={() => setCounter()} style={{ width: "190px" }}>
        + 5
      </button>
    </div>
  );
}

export default ReadWriteAtoms;
