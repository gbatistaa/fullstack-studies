import { atom, useAtom } from "jotai";
import { atomFamily } from "jotai/utils";
import React, { useRef } from "react";
import Todos from "../classes/Todo";
import styles from "../css/todoList.module.css";
import Todo from "./Todo";

export const todoListFamily = atomFamily((id: number) =>
  atom(new Todos(id, "", "", false)),
);
export const todoIdsAtom = atom<number[]>([]);
export const currentIdAtom = atom(1);

function TodoList(): JSX.Element {
  const [ids, setIds] = useAtom(todoIdsAtom);
  const [currentId, setCurrentId] = useAtom(currentIdAtom);
  const inputsRef = useRef({
    name: "",
    category: "",
    isCompleted: false,
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const { name, value, checked, type } = event.target;
    inputsRef.current = {
      ...inputsRef.current,
      [name]: type === "checkbox" ? checked : value,
    };
  };

  const createNewTodo = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { name, category, isCompleted } = inputsRef.current;

    // Define um novo átomo para o ID atual e atualiza o objeto `Todos`
    const newTodoAtom = todoListFamily(currentId);
    setIds((currIds) => [...currIds, currentId]);
    setCurrentId((curr) => curr + 1);

    // Atualiza o conteúdo do novo átomo diretamente
    newTodoAtom.write();
  };

  return (
    <section className={styles.todoListContainer}>
      <div className={styles.todoList}>
        {ids.map((id) => (
          <Todo key={id} id={id} />
        ))}
      </div>
      <div className={styles.newTodoInputsDiv}>
        <form className={styles.createTodoForm} onSubmit={createNewTodo}>
          <input type="text" name="name" onChange={handleInputChange} />
          <input type="text" name="category" onChange={handleInputChange} />
          <input
            type="checkbox"
            name="isCompleted"
            onChange={handleInputChange}
          />
          <button type="submit">Create Todo</button>
        </form>
      </div>
    </section>
  );
}

export default TodoList;
