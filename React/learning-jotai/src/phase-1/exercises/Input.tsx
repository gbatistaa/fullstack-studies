import { atom, useAtom } from "jotai";
import styles from "./Input.module.css";

const inputAtom = atom("Hello World!");
function Input(): JSX.Element {
  const [inputValue, setInputValue] = useAtom(inputAtom);
  return (
    <div className={styles.inputDiv}>
      <input type="text" onChange={(e) => setInputValue(e.target.value)} />
      <h1>{inputValue}</h1>
    </div>
  );
}
export default Input;
