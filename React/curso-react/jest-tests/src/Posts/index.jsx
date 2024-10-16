import "./styles.css";

import { PostCard } from "../Post Card";

export const Posts = ({ posts = [] }) => {
  return (
    <div>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          body={post.body}
          id={post.id}
          cover={post.cover}
        />
      ))}
    </div>
  );
};
