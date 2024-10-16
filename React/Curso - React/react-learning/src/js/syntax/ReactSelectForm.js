import { useState } from 'react';
import { formStyle } from './Forms';

export default function ReactSelectForm () {
    const [alien, setAlien] = useState("");

    // This function will execute the function that changes the component state:

    const handleChange = (event) => {
        event.preventDefault();
        setAlien(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Seu alien escolhido foi o: ${alien}`)
    }

    return (
        <form style={formStyle} onSubmit={(ev) => handleSubmit(ev)}>
            <label>
                <select value={alien} onChange={(ev) => handleChange(ev)}>
                    <option value="Quatro-Braços">Quatro-Braços</option>
                    <option value="Chama">Chama</option>
                    <option value="XLR8">XLR8</option>
                    <option value="Tartagira">Tartagira</option>
                    <option value="Enormossauro">Enormossauro</option>
                    <option value="Ultra-T">Ultra-T</option>
                    <option value="Gigante">Gigante</option>
                    <option value="Eco-Eco">Eco-Eco</option>
                </select>
            </label>
            <input type='submit'/>
        </form>
    )
}