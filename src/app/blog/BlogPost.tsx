import { posts } from "./posts";

export default function BlogPost(id: number = 1) {
  const post = posts[id];

  return (
    <main>
      <hgroup>
        <h3>{post.title}</h3>
        <h4>{post.summary}</h4>
      </hgroup>
      <p>{post.content ?? "No content added yet"}</p>
    </main>
  );
}
