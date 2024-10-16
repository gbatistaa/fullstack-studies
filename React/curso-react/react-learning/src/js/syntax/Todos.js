import { memo } from "react";
import "./Todos.css"

function Todo({todos}) {
    console.log("rendered child"); // Triggers de console everytime that the Todo component is rendered

    return (
        <div id="div-linda">
            <h2>My Todos</h2>
            <ul>
                {/* List item rendering */}
                {todos.map((todo, index) => <p key={index}>{todo}</p>)}
            </ul>
        </div>
        
    )
}

// The react function memo verifies if the component hasn't changed since last renderization:
// If true, it doesn't renders the component again

export default memo(Todo);
