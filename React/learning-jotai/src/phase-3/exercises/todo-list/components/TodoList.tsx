import { atom, useAtom } from "jotai";
import { atomFamily } from "jotai/utils";
import Todos from "../classes/Todo";
import Todo from "./Todo";

export const todoListFamily = atomFamily((id: number) =>
  atom<Todos>(new Todos(id)),
);

export const todoIdsAtom = atom<number[]>([]);

function TodoList(): JSX.Element {
  const [ids, setIds] = useAtom(todoIdsAtom);

  const createNewTodo = (id: number): void => {
    console.log(todoListFamily(id).init);
  };

  return (
    <section>
      <div>
        {ids.map((id: number) => {
          return <Todo key={id} id={id} />;
        })}
      </div>
    </section>
  );
}

export default TodoList;
