// This is a button React Component that triggers a function to show some numbers factorial
// on an other span Component by a single click:

export default function ShowFactorial() {
    
    // The second parameter "b" allows us to acess the React Event 

    const factorial = (num, b) => {
        let result = 1;
        for (let vector = 1; vector < num + 1; vector++) {
            result *= vector;
        }
        console.log(b)
        alert(`The factorial of ${num} is ${result}`);
    }

    return <button onClick={(event) => factorial(7 + 12, event)}>SHOW THE FACTORIAL</button>;

}
