import { createRoot } from "react-dom/client";
import "./index.css";
import TodoList from "./phase-3/exercises/todo-list/components/TodoList.tsx";

createRoot(document.getElementById("root")!).render(<TodoList />);
