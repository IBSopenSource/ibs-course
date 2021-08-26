import { Post } from "./components/Post";

const posts = [
  { head: "first post", body: "first body" },
  { head: "second post", body: "second body" },
  { head: "third post", body: "third body" },
  { head: "forth post", body: "forth body" },
];

export const App = () => (
  <div>
    <h1>My React App</h1>
    {posts.map((post) => (
      <Post head={post.head} body={post.body} />
    ))}
  </div>
);
