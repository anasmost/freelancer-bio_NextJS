import { posts } from "./posts";

export default function Blog() {
  return (
    <main role="directory">
      <ul role="list">
        {Object.entries(posts).map(([id, { title, summary }]) => (
          <li role="listitem" key={id}>
            <h4>{title}</h4>
            <p>{summary}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
