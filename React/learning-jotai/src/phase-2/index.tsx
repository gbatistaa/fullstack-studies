/* Tópicos estudados :
  - Criação de átomos derivados
  - Uso de átomos assíncronos
  - Atualizações dependentes e memorização de estados derivados
*/

import { atom, useAtom } from "jotai";
import React from "react";

const countAtom = atom(0);
const derivativeAtom = atom((get) => get(countAtom) * 2);

function Index(): JSX.Element {
  const [count, setCount] = useAtom(countAtom);
  const [derivative] = useAtom(derivativeAtom);

  const handleClick = (event: React.MouseEvent): void => {
    event.preventDefault();
    setCount((countValue) => countValue + 1);
  };

  return (
    <div>
      <h2>Primary value: {count}</h2>
      <h2>Derivative value: {derivative}</h2>
      <button onClick={(e) => handleClick(e)}>Incrementor</button>
    </div>
  );
}

export default Index;
