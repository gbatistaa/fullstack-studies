import { useState, Suspense, lazy } from "react";
import "../../index.css";

// React.lazy é um recurso para otimizaçoa de aplicações React
// somente é necessário usar e recoomendado em aplicações
// ja bem grandes que apresentam problemas de carregamento
// ou são bastante pesadas em questão de uso de memória

// O code-splitting somente carrega o componente lazy
// quando usuário pedir através de algum evento
const loadComponent = () => {
  console.log("Componente carregando...");
  return delayForDemo(import("./LazyComponent.jsx"));
};
const LazyCompnent = lazy(loadComponent);

export default function Home() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <p>
        <button
          onMouseOver={() => loadComponent()}
          onClick={() => setShow((s) => !s)}
        >
          Show {show ? "is on screen" : "is not on screen"}
        </button>
      </p>
      <Suspense fallback={<p>Loading...</p>}>
        {show && <LazyCompnent />}
      </Suspense>
    </div>
  );
}

async function delayForDemo(promise) {
  const response = await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("esperou 2 segundos para " + response);
  return promise;
}

// Não necessariamente o componente tem que carregar somente na hora que
// houver um evento de clique por parte do usuário,
// é uma ótima forma e efieciente de carregar o componente lazy
// já no hover
