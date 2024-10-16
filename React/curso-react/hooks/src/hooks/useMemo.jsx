import "./css/useCallback.css";
import React, { useState, useEffect, useMemo } from "react";

function Post({ post }) {
  console.log("Filho renderizou");
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

// in this case everytime that you type something int the input
// the whole page re-renders, to avoid this, and keep it all in one page
// we must use useMemo to avoid render propagation to the children
// or desnecessery re-render

export default function UseMemo() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState("");
  console.log("Pai renderizou");

  // this http request is made 5 seconds after the first render

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((r) => r.json())
        .then((r) => setPosts(r));
    }, 5000);
  }, []);

  return (
    <div className="memo">
      <p>
        <input
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })
        );
      }, [posts])}
      {posts.length <= 0 && <p>Ainda nao existem posts</p>}
    </div>
  );
}
