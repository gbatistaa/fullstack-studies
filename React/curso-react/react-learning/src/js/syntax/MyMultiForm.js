import { useState } from 'react';

export default function MyMultiForm() {

    const [input, setInputValue] = useState({})

    // Empty object because we are gonna extract 4 inputs from the user
    
    const handleChange = (event) => {
        const name = event.target.name; // HTML input name atribute 
        const value = event.target.value; // current user input data

        // This function recieves as a argument an arrow function, that returns an object
        // this object have all the previous values already stored and the new one:

        setInputValue((previousValues) => ({...previousValues, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(input);
    }

    const formStyle = {
                        height: '500px',
        width: '500px',
        backgroundColor: 'darkblue',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }

    return (
        <form onSubmit={(ev) => handleSubmit(ev)} style={formStyle}>
            <label>
                <input
                    name='username'
                    type='text'
                    value={input.username || ""} // to avoid React compile error
                    onChange={(ev) => handleChange(ev)}
                    placeholder='Your name'
                    autoComplete='off'
                />
            </label>
            <label>
                <input
                    name='age'
                    type='number'
                    value={input.age || ""} // to avoid React compile error
                    onChange={(ev) => handleChange(ev)}
                    placeholder='Your age'
                    autoComplete='off'
                />
            </label>
            <label>
                <input
                    name='favSinger'
                    type='text'
                    value={input.favSinger || ""} // to avoid React compile error
                    onChange={(ev) => handleChange(ev)}
                    placeholder='Your favorite singer'
                    autoComplete='off'
                />
            </label>
            <label>
                <input
                    name='favAlbum'
                    type='text'
                    value={input.favAlbum || ""} // to avoid React compile error
                    onChange={(ev) => handleChange(ev)}
                    placeholder='Your favorite album'
                    autoComplete='off'
                />
            </label>
            <input type='submit'/>
        </form>
    )
}