// o Event emmiter se comporta como os eventos do navegador
// Podemos ativer um método ou uma função em algum ponto da nossa aplicação

import EventEmmiter from "events";

const eventEmmiter = new EventEmmiter();

eventEmmiter.on("start", () => {
  console.log("Durante");
});

console.log("antes");

eventEmmiter.emit("start");
