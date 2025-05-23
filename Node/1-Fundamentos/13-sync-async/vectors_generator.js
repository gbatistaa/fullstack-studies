var fs = require("fs");
var readline = require("readline");
console.clear();
var argvs = process.argv.slice(2);
var read = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// Input question to get the generated vectors quantity from user:
read.question("Quantidade de vetores: ", function (answer) {
    // Erases the file current data:
    var vectorsQuant = parseInt(answer);
    try {
        if (isNaN(vectorsQuant)) {
            read.close();
            throw new Error("Value passed is not numeric");
        }
        fs.writeFileSync(argvs[0], "");
        generateQuickSortFile(vectorsQuant);
        read.close();
    }
    catch (error) {
        console.error(error);
    }
});
// Function to generate n numbers from 1 to 100:
function generateRandomVector(n) {
    var vector = [];
    var randomNum = 0;
    for (var i = 0; i < n; i++) {
        // Does not permits duplicated elements in the vector:
        do {
            randomNum = Math.round(Math.random() * 99) + 1;
        } while (vector.includes(randomNum));
        vector.push(randomNum);
    }
    return vector;
}
// Main function:
function generateQuickSortFile(vectorsQuant) {
    fs.appendFileSync(argvs[0], "".concat(vectorsQuant.toString(), "\n"));
    // Iterator to write data in the file of n(vectorsQuant) vectors:
    for (var i = 0; i < vectorsQuant; i++) {
        // Chooses randomly the size of the vector from 3 to 15:
        var randomVectorSize = Math.round(Math.random() * 12) + 3;
        var vector = generateRandomVector(randomVectorSize);
        // Writes the quantity of elements in one line:
        fs.appendFileSync(argvs[0], "".concat(randomVectorSize, "\n"));
        // The elements itself:
        for (var i_1 = 0; i_1 < randomVectorSize - 1; i_1++) {
            fs.appendFileSync(argvs[0], "".concat(vector[i_1], " "));
        }
        fs.appendFileSync(argvs[0], "".concat(vector[randomVectorSize - 1], "\n"));
    }
}
