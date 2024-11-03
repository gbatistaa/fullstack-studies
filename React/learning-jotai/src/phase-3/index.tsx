import { atom, useAtom } from "jotai";

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
