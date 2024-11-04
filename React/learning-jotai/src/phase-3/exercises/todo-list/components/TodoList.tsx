import { atom, useAtom } from "jotai";
import { atomFamily } from "jotai/utils";
import Todos from "../classes/Todo";
import styles from "../css/todoList.module.css";
import Todo from "./Todo";

export const todoListFamily = atomFamily((id: number) =>
  atom<Todos>(new Todos(id)),
);
export const todoIdsAtom = atom<number[]>([]);

function TodoList(): JSX.Element {
  const [ids, setIds] = useAtom(todoIdsAtom);

  const createNewTodo = (id: number): void => {
    todoListFamily(id);
  };

  return (
    <section className={styles.todoListContainer}>
      <div className={styles.todoList}>
        {ids.map((id: number) => {
          return <Todo key={id} id={id} />;
        })}
      </div>
      <form className={styles.createTodoForm}>
        <div className={styles.newTodoInputsDiv}>
          <input type="text" />
          <input type="text" />
          <input type="checkbox" name="" id="" />
        </div>
        <button type="submit">Create Todo</button>
      </form>
    </section>
  );
}

export default TodoList;
