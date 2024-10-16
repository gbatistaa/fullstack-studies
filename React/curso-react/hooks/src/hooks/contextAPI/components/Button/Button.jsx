import { useCounterContext } from "../../contexts/CounterContext";

export const Button = ({ text, onButtonClick, isDisabled }) => {
  // const [state, actions] = useCounterContext();

  return (
    <button
      style={{ fontSize: "60px" }}
      onClick={() => onButtonClick()}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};
