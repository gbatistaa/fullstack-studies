import { atom } from "jotai";
import { atomFamily } from "jotai/utils";

const todoAtom = atom("");
const todoListFamily = atomFamily((id) => atom());

function TodoList(): JSX.Element {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}

export default TodoList;
