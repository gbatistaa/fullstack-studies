// import { Div } from "./hooks/components/Div";
import { Posts } from "../../components/Posts";
import { CounterProvider } from "../../contexts/CounterProvider";
import { CounterContext } from "../../contexts/CounterProvider/context";
import { PostsProvider } from "../../contexts/PostsProvider";
import "./styles.css";
function App() {
  return (
    <CounterProvider>
      <PostsProvider>
        <div>
          <Posts />
        </div>
      </PostsProvider>
    </CounterProvider>
  );
}

export default App;
