import { useAtom } from "jotai";
import React from "react";
import styles from "../css/todo.module.css";
import { todoIdsAtom, todoListFamily } from "./TodoList";

function Todo({ id }: { id: number }): JSX.Element {
  const [todo] = useAtom(todoListFamily(id)); // Remova os parênteses adicionais
  const [ids, setIds] = useAtom(todoIdsAtom);

  const deleteTodo = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    setIds(ids.filter((existingId) => existingId !== id));
  };

  return (
    <div className={styles.todoInfo}>
      <h1>{todo.name}</h1>
      <h1>{todo.category}</h1>
      <h1>{todo.isCompleted ? "yes" : "no"}</h1>
      <button type="button" onClick={deleteTodo}>
        X
      </button>
    </div>
  );
}

export default Todo;
