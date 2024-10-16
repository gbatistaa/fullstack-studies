import { useState } from 'react';
import "./useState.css"

export default function SelectSinger(params) {
    const [singerName, setSingerName] = useState("Escolha bem");
    
    return (
        
        <div id='singer-container'>
            <h1>MY SINGER BUTTONS:</h1> 
            <p id='singer-name'>{singerName}</p>
            <section>
                <button className='us-btn' onClick={() => setSingerName("Taylor Swift")}>Taylor Swift</button>
                <button className='us-btn' onClick={() => setSingerName("Ariana Grande")}>Ariana Grande</button>
                <button className='us-btn' onClick={() => setSingerName("Michael Jackson")}>Michael Jackson</button>
                <button className='us-btn' onClick={() => setSingerName("The Weeknd")}>The Weeknd</button>
            </section>
         </div>
    )
}
