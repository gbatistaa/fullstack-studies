import { useAtom } from "jotai";
import { todoListFamily } from "./TodoList";

function Todo({ id }: { id: number }): JSX.Element {
  const [todo, setTodo] = useAtom(todoListFamily(id));
  return (
    <div>
      <h1>{todo.name}</h1>
      <h1>{todo.category}</h1>
      <h1>{todo.isCompleted ? "yes" : "no"}</h1>
    </div>
  );
}

export default Todo;
