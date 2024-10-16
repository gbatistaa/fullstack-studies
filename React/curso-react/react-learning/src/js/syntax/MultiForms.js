import { useState } from 'react';

// Writing a multi-form:

export default function MultiForm(params) {
    const [inputs, setInputs] = useState({});

    // This is the function executed every time the input value is changed:

    const handleChange = (event) => {

        // Variable that stores the HTML input name atribute:
        const name = event.target.name;  

        // Variable that stores the HTML input inner value (user input data)
        const value = event.target.value;
        setInputs((preValues) => ({...preValues, [name]: value}));
    }

    // This is the function executed by the submit event:

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Your name is ${inputs.username} and you are ${inputs.age} years old`);
    }

    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            <label>Enter your name:
                <input
                    type='text'
                    name='username'
                    value={inputs.username}
                    onChange={(ev) => handleChange(ev)}
                    autoComplete='off'
                />
            </label>
            <label>Enter your age:
                <input
                    type='number'
                    name='age'
                    onChange={(ev) => handleChange(ev)}
                    value={inputs.age}
                    autoComplete='off'
                />
            </label>
            <input type='submit'/>
        </form>
    )
}
