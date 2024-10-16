import "../../../index.css";
import { useState, useEffect, useCallback } from "react";

const useAsync = (asyncFunction, shouldRun) => {
  const [state, setState] = useState({
    result: null,
    error: null,
    status: "idle",
  });

  // O uso do use callback nesse caso, como a função run
  // estará dentro de um useEffect, ultiiza-se o use callback
  // para evitar loop infinito do useEffect, pois a funçõa run
  // sem o useCallback será montada e desmontada:

  const run = useCallback(async () => {
    await new Promise((r) => setTimeout(r, 2000));
    setState({ result: null, error: null, status: "pending" });

    return asyncFunction()
      .then((response) => {
        setState({ result: response, error: null, status: "settled" });
      })
      .catch((error) => {
        setState({ result: null, error: error, status: "error" });
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (shouldRun) run();
  }, [run, shouldRun]);

  return [run, state.result, state.error, state.status];
};

const fetchData = async () => {
  await new Promise((r) => setTimeout(r, 2000));
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const json = await data.json();
  return json;
};

export default function Home() {
  const [reFetchData, result, error, status] = useAsync(fetchData, true);

  if (status === "idle") {
    return <pre>Nada executando</pre>;
  }
  if (status === "pending") {
    return <pre>loading...</pre>;
  }
  if (status === "error") {
    return <pre>error: {error.message}</pre>;
  }
  if (status === "settled") {
    return <pre>{JSON.stringify(result, null, 2)}</pre>;
  }

  return "IXIII;";
}
