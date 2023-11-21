import "moment/locale/pt-br";
import styles from "./page.module.css";
import PrimaryCard from "./components/primaryCard";
import SecondCard from "./components/secondaryCard";
import { api } from "@/src/data/api";

export interface ImgProps {
  src: string;
  alt: string;
}

export interface AutorProps {
  avatar: string;
  name: string;
}

export interface PostProps {
  id: string;
  title: string;
  tag: string;
  date: string;
  img: ImgProps;
  author: AutorProps;
}

async function getPosts() {
  const response = await api("/posts");
  const data: PostProps[] = await response.json();
  return data;
}

export default async function Home() {
  const data = await getPosts();
  const firstAndSecondeItem = data.filter((_item, index) => index < 2);
  const restOfItems = data.filter((item, index) => index > 1);

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
