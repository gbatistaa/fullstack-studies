// In React, you will render lists with some type of loop.

// You are going to use some iteration structure like the map function: 

function Taste({food}) {
    return <li>I love {food}</li>
}
export function Menu() {
    const foods = ['Pizza', 'Acarajé', 'Hamburguer', 'Pastel'];
    return (
        <>
            <h1>Esse é o nosso Cardápio:</h1>
            <ul>
                {foods.map((food) => <Taste food={food}/>)}
            </ul>
        </>
    )
}

// Another React Component:

function Carreer({club}) {
    return <li>Neymar already played in {club}</li>
}

export default function NeymarClubs() {
    const clubs = ['Santos', 'Barcelona', 'Paris-Saint-Germain', 'Al-Hilal'];
    return (
        <>
            <h1>Esses são os times que Neymar Júnior já jogou</h1>;
            <ul>
                {clubs.map((club) => <Carreer club={club}/>)}
            </ul>
        </>
    )
}
