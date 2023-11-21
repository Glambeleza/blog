import "moment/locale/pt-br";
import styles from "./page.module.css";
import PrimaryCard from "./components/primaryCard";
import SecondCard from "./components/secondaryCard";

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

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/posts");
  const json = await response.json();
  const data: PostProps[] = json;

  const firstAndSecondeItem = data.filter((item, index) => index < 2);
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
