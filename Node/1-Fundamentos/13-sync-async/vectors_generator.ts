const fs = require("fs");
const readline = require("readline");

console.clear();

const argvs = process.argv.slice(2);

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Input question to get the generated vectors quantity from user:
read.question("Quantidade de vetores: ", (answer: string): void => {
  // Erases the file current data:
  const vectorsQuant = parseInt(answer);
  try {
    if (isNaN(vectorsQuant)) {
      read.close();
      throw new Error("Value passed is not numeric");
    }
    fs.writeFileSync(argvs[0], "");
    generateQuickSortFile(vectorsQuant);
    read.close();
  } catch (error) {
    console.error(error);
  }
});

// Function to generate n numbers from 1 to 100:
function generateRandomVector(n: number): number[] {
  let vector: number[] = [];
  let randomNum = 55;
  for (let i = 0; i < n; i++) {
    // Does not permits duplicated elements in the vector:
    do {
      randomNum = Math.round(Math.random() * 99) + 1;
    } while (vector.includes(randomNum));
    vector.push(randomNum);
  }
  return vector;
}

// Main function:
function generateQuickSortFile(vectorsQuant: number): void {
  fs.appendFileSync(argvs[0], `${vectorsQuant.toString()}\n`);

  // Iterator to write data in the file of n(vectorsQuant) vectors:
  for (let i = 0; i < vectorsQuant; i++) {
    // Chooses randomly the size of the vector from 3 to 15:
    let randomVectorSize = Math.round(Math.random() * 12) + 3;
    let vector = generateRandomVector(randomVectorSize);
    // Writes the quantity of elements in one line:
    fs.appendFileSync(argvs[0], `${randomVectorSize}\n`);

    // The elements itself:
    for (let i = 0; i < randomVectorSize - 1; i++) {
      fs.appendFileSync(argvs[0], `${vector[i]} `);
    }
    fs.appendFileSync(argvs[0], `${vector[randomVectorSize - 1]}\n`);
  }
}
