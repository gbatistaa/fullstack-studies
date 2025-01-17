import fs from "fs";

console.log("início");

fs.writeFile("output.txt", "eu fui escrito pela segunda vez", (err) => {
  setTimeout(() => {
    console.log("Arquivo foi criado!");
  }, 2000);
});
