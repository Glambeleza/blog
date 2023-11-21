import "moment/locale/pt-br";
import styles from "./page.module.css";
import PrimaryCard from "./components/primaryCard";
import SecondCard from "./components/secondaryCard";
import { api } from "@/src/data/api";
import { PostProps } from "@/src/data/types/posts";

async function getPosts(): Promise<PostProps[]> {
  const response = await api("/posts", {
    next: {
      revalidate: 60 * 60 * 24, // 24 hours
    },
  });
  const data = await response.json();
  return data;
}

export default async function Home() {
  const data = await getPosts();
  const firstAndSecondeItem = data.filter((_item, index) => index < 2);
  const restOfItems = data.filter((_item, index) => index > 1);

  return (
    <main className={styles.main}>
      <ul className={styles.firstList}>
        {firstAndSecondeItem.map((post) => (
          <PrimaryCard key={post.id} {...post} />
        ))}
      </ul>
      <ul className={styles.secondList}>
        {restOfItems.map((post) => (
          <SecondCard key={post.id} {...post} />
        ))}
      </ul>
    </main>
  );
}
