// import { Div } from "./hooks/components/Div";
import { Posts } from "../../components/Posts";
import { CounterProvider } from "../../../contexts/CounterProvider/index";
import { PostsProvider } from "../../../contexts/PostsProvider";
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
