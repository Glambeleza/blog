import styles from "./index.module.css";
import Link from "next/link";

import Image, { StaticImageData } from "next/image";
import moment from "moment";

interface ImgProps {
  src: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
}

interface AutorProps {
  avatar: string | StaticImageData;
  name: string;
}

interface PostProps {
  id: string;
  title: string;
  slug: string;
  tag: string;
  date: string | Date;
  img: ImgProps;
  author: AutorProps;
}

export default function PrimaryCard(post: PostProps) {
  return (
    <li key={post.id}>
      <nav>
        <Link href={`/news/${post.slug}`}>
          <div className={styles.firstContImg}>
            <Image
              src={post.img?.src}
              alt={post.img?.alt}
              width={post.img?.width}
              height={post.img?.height}
            />
          </div>

          <div className={styles.info}>
            <p className={styles.tag}>{post.tag?.toUpperCase()}</p>
            <h2 className={styles.titlePost} id="highlightable">
              {post.title}
            </h2>
            <div className={styles.autorDate}>
              <div className={styles.autor}>
                <div className={styles.avatar}>
                  {/* <Image src={autor.avatar} alt="" width={50} height={50} /> */}
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={25}
                    height={25}
                  />
                </div>
                <div className={styles.nome}>{post.author?.name}</div>
              </div>
              <p className={styles.date}>{moment(post.date).format("LL")}</p>
            </div>
          </div>
        </Link>
      </nav>
    </li>
  );
}
