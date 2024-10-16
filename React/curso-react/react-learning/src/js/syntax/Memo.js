import { useState } from 'react';
import Todos from "./Todos";

export default function TodoApp() {
    const [todoKey, setTodoKey] = useState(0);
    const [allTodos, setTodos] = useState(["todo 1", "todo 2"]);

    const increment = () => {
        setTodoKey((currTodoKey) => currTodoKey + 1)
    }

    return (
        <>
            <Todos todos={allTodos} />
            <hr/>
            <div>
                Count: {todoKey}
                <button onClick={() => increment()}>+</button>
            </div>
        </>
    )
}