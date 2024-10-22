import { atom, useAtom } from "jotai";
import "./App.css";

// Making a counter with Jotai Atoms

const countAtom = atom(0);

function App(): JSX.Element {
  const [count, setCount] = useAtom(countAtom);

  return (
    <>
      <div className="card">
        <button
          onClick={() => {
            setCount(count + 1);
            console.log(count);
          }}
        >
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
