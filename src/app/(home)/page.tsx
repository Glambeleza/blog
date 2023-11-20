import "moment/locale/pt-br";
import styles from "./page.module.css";
import img1 from "public/13.jpg";
import { v4 as UUIDV4 } from "uuid";
import PrimaryCard from "./components/primaryCard";
import SecondCard from "./components/secondaryCard";

export default function Home() {
  const data = [
    {
      id: UUIDV4(),
      title:
        "Architectural Engineering Wonders of the modern era for your Inspiration",
      slug: "post-1-beleza-e-bem-estar",
      tag: "beleza",
      date: new Date(),
      img: {
        src: img1,
        alt: "imagem 1",
        width: 3210,
        height: 2140,
      },

      author: {
        avatar: img1,
        name: "nome do autor",
      },
    },

    {
      id: UUIDV4(),
      title:
        "Architectural Engineering Wonders of the modern era for your Inspiration",
      slug: "post-1-beleza-e-bem-estar",
      tag: "beleza",
      date: new Date(),
      img: {
        src: img1,
        alt: "imagem 1",
        width: 3210,
        height: 2140,
      },

      author: {
        avatar: img1,
        name: "nome do autor",
      },
    },

    {
      id: UUIDV4(),
      title:
        "Architectural Engineering Wonders of the modern era for your Inspiration",
      slug: "post-1-beleza-e-bem-estar",
      tag: "beleza",
      date: new Date(),
      img: {
        src: img1,
        alt: "imagem 1",
        width: 3210,
        height: 2140,
      },

      author: {
        avatar: img1,
        name: "nome do autor",
      },
    },

    {
      id: UUIDV4(),
      title:
        "Architectural Engineering Wonders of the modern era for your Inspiration",
      slug: "post-1-beleza-e-bem-estar",
      tag: "beleza",
      date: new Date(),
      img: {
        src: img1,
        alt: "imagem 1",
        width: 3210,
        height: 2140,
      },

      author: {
        avatar: img1,
        name: "nome do autor",
      },
    },

    {
      id: UUIDV4(),
      title:
        "Architectural Engineering Wonders of the modern era for your Inspiration",
      slug: "post-1-beleza-e-bem-estar",
      tag: "beleza",
      date: new Date(),
      img: {
        src: img1,
        alt: "imagem 1",
        width: 3210,
        height: 2140,
      },

      author: {
        avatar: img1,
        name: "nome do autor",
      },
    },

    {
      id: UUIDV4(),
      title:
        "Architectural Engineering Wonders of the modern era for your Inspiration",
      slug: "post-1-beleza-e-bem-estar",
      tag: "beleza",
      date: new Date(),
      img: {
        src: img1,
        alt: "imagem 1",
        width: 3210,
        height: 2140,
      },

      author: {
        avatar: img1,
        name: "nome do autor",
      },
    },
  ];

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
