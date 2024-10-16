// Criação de um custom hook
import "./styles.css";
import { useState, useEffect, useRef } from "react";

// Função para comparar dois objetos, transmormando-os em uma string:

const isObjectEqual = (objA, objB) => {
  return JSON.stringify(objA) === JSON.stringify(objB);
};

const useFetch = (url, options) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  const urlRef = useRef(url);
  const optionsRef = useRef(options);

  // Ação de efeito React para monitorar a mudança das variáveis
  // de requisição:

  useEffect(() => {
    let changed = false;

    if (isObjectEqual(url, urlRef.current) === false) {
      urlRef.current = url;
      changed = true;
    }

    if (isObjectEqual(options, optionsRef.current) === false) {
      optionsRef.current = options;
      changed = true;
    }

    if (changed) setShouldLoad((shouldLoad) => !shouldLoad);
  }, [url, options]);

  useEffect(() => {
    // Variável que evita que a requisição continue caso o componente
    // na qual foi solicitada essa requisição pelo useFetch for desmontado:
    let wait = false;

    // Variável de controle de abortagem de requisição:
    const controller = new AbortController();
    const signal = controller.signal;

    setLoading(true);

    const fetchData = async () => {
      // Simulação um carregamento de página com 3s de duração:
      await new Promise((response) => setTimeout(response, 3000));

      // Estrutura de requisição HTTP com tratamento de erros:
      try {
        const response = await fetch(urlRef.current, {
          signal,
          ...optionsRef.current,
        });

        const jsonResult = await response.json();
        if (wait === false) {
          setResult(jsonResult);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        throw error;
      }
    };

    fetchData();

    // função executada quando o componente é desmontado enquanto
    // a requisição http está sendo processada, então ela é abortada:

    return () => {
      wait = true;
      controller.abort();
    };

    // essas duas dependências
    // devem realmente terem mudado de valor
    // para ativarem a o effect
  }, [shouldLoad]);

  return [result, loading];
};

export const Home = () => {
  const [postId, setPostId] = useState("");
  const [result, loading] = useFetch(
    "https://jsonplaceholder.typicode.com/posts/" + postId,
    {
      method: "GET",
      headers: {
        abc: "1" + postId,
      },
    }
  );

  useEffect(() => {
    console.log("id do post: ", postId);
    return () => {};
  }, [postId]);

  if (loading) return <p>Loading...</p>;

  if (!loading && result) {
    return (
      <div>
        {result.length > 0 ? (
          result.map((post) => {
            return (
              <div key={`key-${post.id}`} onClick={() => setPostId(post.id)}>
                <p>{post.title}</p>
              </div>
            );
          })
        ) : (
          <div onClick={() => setPostId("")}>
            <p>{result}</p>
          </div>
        )}
      </div>
    );
  }
};
