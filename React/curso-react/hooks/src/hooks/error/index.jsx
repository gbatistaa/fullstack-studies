import { useState, useEffect, Component } from "react";
import "../../index.css";
const s = {
  style: {
    fontSize: "60px",
  },
};

// Error Boundary direto da documentação do React:

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    // ele irá retornar algum componente react que ficará no lugar
    // daquele no qual a alguma ação que pode gerar um erro foi requisitada
    // geralmente é uma mensagem de erro:

    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback;
    }

    return this.props.children;
  }
}

function ItWillThrowError() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter > 3) throw new Error("Make the L");
  }, [counter]);

  const handleClick = () => {
    setCounter((c) => c + 1);
  };
  return (
    <div>
      <button
        style={{ height: "200px", width: "400px", fontSize: "5rem" }}
        onClick={() => handleClick()}
      >
        increase {counter}
      </button>
    </div>
  );
}

export default function Home() {
  return (
    <div {...s}>
      <ErrorBoundary fallback={<p>O counter é maior que 3</p>}>
        <ItWillThrowError />
      </ErrorBoundary>
      <ErrorBoundary fallback={<p>O counter é maior que 3</p>}>
        <ItWillThrowError />
      </ErrorBoundary>
      <ErrorBoundary fallback={<p>O counter é maior que 3</p>}>
        <ItWillThrowError />
      </ErrorBoundary>
      <ErrorBoundary fallback={<p>O counter é maior que 3</p>}>
        <ItWillThrowError />
      </ErrorBoundary>
    </div>
  );
}
