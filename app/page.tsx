import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  const posts = [
    { id: "1", title: "Next.js", slug: "1" },
    { id: "2", title: "React", slug: "2" },
    { id: "3", title: "TypeScript", slug: "3" },
  ];

  return (
    <main className={styles.main}>
      <h1>Home Glambeleza {}</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
