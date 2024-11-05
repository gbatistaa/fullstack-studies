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

    // Defines a new todoListFamily Atom with the current id
    // and adds the new id on the ids list
    const newTodoAtom = todoListFamily(currentId).init;
    setIds((currIds) => [...currIds, currentId]);
    setCurrentId((curr) => curr + 1);

    // Puts the current inputs values inside the todo description
    newTodoAtom.name = name === "" ? "Untitled" : name;
    newTodoAtom.category = category === "" ? "No category" : category;
    newTodoAtom.isCompleted = isCompleted;
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
          <input
            type="text"
            name="name"
            onChange={(e) => handleInputChange(e)}
          />
          <input
            type="text"
            name="category"
            onChange={(e) => handleInputChange(e)}
          />
          <input
            type="checkbox"
            name="isCompleted"
            onChange={(e) => handleInputChange(e)}
          />
          <button type="submit">Create Todo</button>
        </form>
      </div>
    </section>
  );
}

export default TodoList;
