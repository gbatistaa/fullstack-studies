// O node js segue uma arquitetura de execução de código feita de cima para baixo:

function a() {
  console.log("executando a()");
}

function b() {
  console.log("executando b()");
}

function c() {
  console.log("executando c()");
  a();
  b();
}

c();
