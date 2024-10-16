import { useState } from 'react';

// Like this , the input will make its default behaivior: reload the entire page

function ReactForm() {
    console.log(useState)
    return (
        <form>
            <label>
                <input type="text" placeholder="Digite seu nome"/>
            </label>
        </form>
    )
}

// In React we are gonna let the form data be handled by the react components
// and store it in its components states

// With forms it's commonly used the onChange atribute, that basically is triggered 
// when the user interacts with it and change its value 

// Using the useState hook to handle the form:

const formStyle = {
    height: "500px",
    width: "500px", 
    backgroundColor: "green",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

export default function MyForm() {
    const [name, setName] = useState("");

    // name is the variable that stores the current state value
    // setName is the function that changes the current state value


    // Adding a submit event handler with the onSubmit atribute 
    // to avoid page reloading:
    
    const handleSubmit = () => {
        if (name.length > 0) {
            alert(`Your name is ${name}`)
        } else {
            alert("Don't you have a name?")
        }
    }
    
    return (
        <form style={formStyle} onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
        }}>
            <label> Enter your name
                <input type="text" 
                value={name} 
                onChange={(e) => {setName(e.target.value)}}
                placeholder="Digite seu nome aqui"
                />
            </label>
            <input type="submit"/>
        </form>
    )
}

export {formStyle}