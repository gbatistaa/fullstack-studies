function Good() {
    return <h1>I HAVE GOOD TASTE IN MUSIC!</h1>;
}

function Bad() {
    return <h1>I HAVE BAD TASTE IN MUSIC!</h1>;
}

// This is conditional rendering, the function will return a different HTML based on the conditional:

export default function MusicTaste(props) {
    const singer = props.singer
    if (singer === 'Taylor Swift') {
        return <Good/>;
    } else if (singer === 'Kanye West') {
        return <Bad/>;
    } else {
        return <h1>JA ESCUTOU TAYLOR SWIFT??</h1>
    }
}