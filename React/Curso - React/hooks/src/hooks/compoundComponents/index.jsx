import { Children, cloneElement, useContext, useState } from "react";
import "../../../index.css";
import { createContext } from "react";

// Padrão React children:
// Serva para passar todas as configurações (atributos)
// dos elementos pais pros filhos

const s = {
  style: {
    fontSize: "60px",
    backgroundColor: "royalblue",
    border: "none",
    cursor: "pointer",
    color: "white",
  },
};

// Exemplo de como passar as propriedades de um objeto pai
// para o componente filho

function Parent({ children }) {
  return Children.map(children, (child) => {
    const newChild = cloneElement(child, { ...s });
    return newChild;
  });
}

const TurnOnOffContext = createContext();

function TurnOnOff({ children }) {
  const [isOn, setIsOn] = useState(true);
  const onTurn = () => setIsOn((s) => !s);

  return (
    <TurnOnOffContext.Provider value={{ isOn, onTurn }}>
      {children}
    </TurnOnOffContext.Provider>
  );
}

const TurnedOn = ({ children }) => {
  const { isOn } = useContext(TurnOnOffContext);
  return isOn ? children : null;
};
const TurnedOff = ({ children }) => {
  const { isOn } = useContext(TurnOnOffContext);
  return isOn ? null : children;
};
const TurnButton = ({ ...props }) => {
  const { isOn, onTurn } = useContext(TurnOnOffContext);
  return (
    <button onClick={() => onTurn()} type="button" {...props}>
      Turn {isOn ? "OFF" : "ON"}
    </button>
  );
};

export default function Home() {
  return (
    <TurnOnOff>
      <p>OI</p>
      <TurnedOn>Aqui as coisas que vão acontecer quando estiver On</TurnedOn>
      <TurnedOff>Aqui vem as coisas do Off</TurnedOff>
      <TurnButton {...s} />
    </TurnOnOff>
  );
}
