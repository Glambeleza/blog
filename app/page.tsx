"use client";
import styles from "./page.module.css";
import Link from "next/link";
import img1 from "../public/13.jpg";
import img2 from "../public/12.jpg";
import img3 from "../public/16.jpg";
import img4 from "../public/13.jpg";
import img5 from "../public/12.jpg";
import img6 from "../public/16.jpg";
import img7 from "../public/13.jpg";
import img8 from "../public/12.jpg";
import img9 from "../public/16.jpg";
import img10 from "../public/13.jpg";
import img11 from "../public/12.jpg";
import img12 from "../public/12.jpg";
import img13 from "../public/16.jpg";
import img14 from "../public/16.jpg";
import img15 from "../public/13.jpg";
import img16 from "../public/12.jpg";
import Image from "next/image";
import moment from "moment";
import "moment/locale/pt-br";

export interface AutorProps {
  name: string;
  avatar: string;
}

export default function Home() {
  const autor: AutorProps = {
    name: "Ieda Helen",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ic3qZGR2oA96imNITrFcgLkb3H-747rbDg3Q_BzUdOxoOT2C-YHct0SObLpa3wA4vyc",
  };
  const dados: Array<{
    id: string;
    title: string;
    slug: string;
    img: any;
    tag: string;
    date: Date | string;
    width: number;
    height: number;
  }> = [
    {
      id: "uuid_1",
      title:
        "Architectural Engineering Wonders of the modern era for your Inspiration",
      slug: "post-1-beleza-e-bem-estar",
      img: img1,
      tag: "beleza",
      date: new Date(),
      width: 3210,
      height: 2140,
    },
    {
      id: "uuid_2",
      title:
        "Architectural Engineering Wonders of the modern era for your Inspiration",
      slug: "post-2-beleza-e-bem-estar",
      img: img2,
      tag: "beleza saúde",
      date: new Date(),
      width: 4000,
      height: 6000,
    },
    {
      id: "uuid_3",
      title: "Every Next Level of Your Life Will Demand a Different You",
      slug: "post-3-beleza-e-bem-estar",
      img: img3,
      tag: "bem-estar",
      date: new Date(),
      width: 4000,
      height: 6000,
    },
    {
      id: "uuid_4",
      title: "Every Next Level of Your Life Will Demand a Different You",
      slug: "post-4-beleza-e-bem-estar",
      img: img4,
      tag: "beleza",
      date: new Date(),
      width: 3909,
      height: 5864,
    },
    {
      id: "uuid_5",
      title: "Every Next Level of Your Life Will Demand a Different You",
      slug: "post-5-beleza-e-bem-estar",
      img: img5,
      tag: "saúde",
      date: new Date(),
      width: 5616,
      height: 3744,
    },
    {
      id: "uuid_6",
      title: "Título 6: Beleza e Bem-Estar",
      slug: "post-6-beleza-e-bem-estar",
      img: img6,
      tag: "saúde  bem-estar",
      date: new Date(),
      width: 4000,
      height: 6000,
    },
    {
      id: "uuid_7",
      title: "Título 7: Beleza e Bem-Estar",
      slug: "post-7-beleza-e-bem-estar",
      img: img7,
      tag: "beleza",
      date: new Date(),
      width: 4353,
      height: 4480,
    },
    {
      id: "uuid_8",
      title: "Título 8: Beleza e Bem-Estar",
      slug: "post-8-beleza-e-bem-estar",
      img: img8,
      tag: "beleza",
      date: new Date(),
      width: 4480,
      height: 6720,
    },
    {
      id: "uuid_9",
      title: "Título 9: Beleza e Bem-Estar",
      slug: "post-9-beleza-e-bem-estar",
      img: img9,
      tag: "beleza",
      date: new Date(),
      width: 3840,
      height: 5760,
    },
    {
      id: "uuid_10",
      title: "Título 10: Beleza e Bem-Estar",
      slug: "post-10-beleza-e-bem-estar",
      img: img10,
      tag: "beleza",
      date: new Date(),
      width: 3648,
      height: 5472,
    },
    {
      id: "uuid_11",
      title: "Título 11: Beleza e Bem-Estar",
      slug: "post-11-beleza-e-bem-estar",
      img: img11,
      tag: "saúde",
      date: new Date(),
      width: 2198,
      height: 3297,
    },
    {
      id: "uuid_12",
      title: "Título 12: Beleza e Bem-Estar",
      slug: "post-12-beleza-e-bem-estar",
      img: img12,
      tag: "saúde",
      date: new Date(),
      width: 2000,
      height: 2963,
    },
    {
      id: "uuid_13",
      title: "Título 13: Beleza e Bem-Estar",
      slug: "post-13-beleza-e-bem-estar",
      img: img13,
      tag: "saúde",
      date: new Date(),
      width: 5184,
      height: 3456,
    },
    {
      id: "uuid_14",
      title: "Título 14: Beleza e Bem-Estar",
      slug: "post-14-beleza-e-bem-estar",
      img: img14,
      tag: "bem-estar",
      date: new Date(),
      width: 2929,
      height: 1953,
    },
    {
      id: "uuid_15",
      title: "Título 15: Beleza e Bem-Estar",
      slug: "post-15-beleza-e-bem-estar",
      img: img15,
      tag: "bem-estar",
      date: new Date(),
      width: 4000,
      height: 6000,
    },
    {
      id: "uuid_16",
      title: "Título 16: Beleza e Bem-Estar",
      slug: "post-16-beleza-e-bem-estar",
      img: img16,
      tag: "bem-estar",
      date: new Date(),
      width: 3087,
      height: 2492,
    },
  ];

  const firstAndSecondeItem = dados.filter((item, index) => index < 2);
  const restOfItems = dados.filter((item, index) => index > 1);

  function highlightText(element: HTMLElement, color: string) {
    element.style.transition = "background-color 0.5s ease";
    element.style.backgroundColor = color;
  }

  return (
    <main className={styles.main}>
      <ul className={styles.firstList}>
        {firstAndSecondeItem.map((post) => (
          <li key={post.id}>
            <nav>
              <Link href={`/blog/${post.slug}`}>
                <div className={styles.firstContImg}>
                  <Image
                    src={post.img}
                    alt={post.title}
                    width={post.width}
                    height={post.width}
                  />
                </div>

                <div className={styles.info}>
                  <p className={styles.tag}>{post.tag?.toUpperCase()}</p>
                  <h2
                    className={styles.titlePost}
                    id="highlightable"
                    onMouseEnter={(e) => {
                      highlightText(e.currentTarget, "#f3ebea");
                    }}
                    onMouseLeave={(e) => {
                      highlightText(e.currentTarget, "white");
                    }}
                  >
                    {post.title}
                  </h2>
                  <div className={styles.autorDate}>
                    <div className={styles.autor}>
                      <div className={styles.avatar}>
                        {/* <Image src={autor.avatar} alt="" width={50} height={50} /> */}
                        <img src={autor.avatar} alt="" />
                      </div>
                      <div className={styles.nome}>{autor.name}</div>
                    </div>
                    <p className={styles.date}>
                      {moment(post.date).format("LL")}
                    </p>
                  </div>
                </div>
              </Link>
            </nav>
          </li>
        ))}
      </ul>
      <ul className={styles.list}>
        {restOfItems.map((post) => (
          <li key={post.id} className={styles.item}>
            <nav>
              <Link href={`/blog/${post.slug}`}>
                <div className={styles.contImg}>
                  <Image
                    src={post.img}
                    alt={post.title}
                    width={post.width}
                    height={post.width}
                  />
                </div>
                <div className={styles.info}>
                  <p className={styles.tag}>{post.tag?.toUpperCase()}</p>
                  <h2
                    className={styles.titlePost}
                    id="highlightable"
                    onMouseEnter={(e) => {
                      highlightText(e.currentTarget, "#f3ebea");
                    }}
                    onMouseLeave={(e) => {
                      highlightText(e.currentTarget, "white");
                    }}
                  >
                    {post.title}
                  </h2>
                  <div className={styles.autorDate}>
                    <div className={styles.autor}>
                      <div className={styles.avatar}>
                        {/* <Image src={autor.avatar} alt="" width={50} height={50} /> */}
                        <img src={autor.avatar} alt="" />
                      </div>
                      <div className={styles.nome}>{autor.name}</div>
                    </div>
                    <p className={styles.date}>
                      {moment(post.date).format("LL")}
                    </p>
                  </div>
                </div>
              </Link>
            </nav>
          </li>
        ))}
      </ul>
    </main>
  );
}
