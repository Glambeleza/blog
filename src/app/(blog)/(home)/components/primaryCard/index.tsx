import styles from "./index.module.css";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import type { PostProps } from "@/src/data/types/post";
import MarkText from "../../components/markText";

export default async function PrimaryCard(post: PostProps) {
  return (
    <Link href={`/post/${post?.id}`}>
      <li key={post?.id} className={styles.container}>
        <div className={styles.cont}>
          <div className={styles.firstContImg}>
            <Image
              src={post?.image}
              alt={post?.summary}
              width={500}
              height={500}
              quality={90}
            />
          </div>

          <div className={styles.info}>
            <p className={styles.tag}>{post?.tag?.toUpperCase()}</p>
            <h2 className={styles.titlePost} id="highlightable">
              <MarkText>{post?.title}</MarkText>
            </h2>
            <div className={styles.autorDate}>
              <div className={styles.autor}>
                <div className={styles.avatar}>
                  <Image
                    src={post?.author?.avatar}
                    alt={post?.author?.name}
                    width={25}
                    height={25}
                    quality={80}
                  />
                </div>
                <div className={styles.nome}>{post?.author?.name}</div>
              </div>
              <p className={styles.date}>
                {moment(post?.created_at).format("LL")}
              </p>
            </div>
          </div>
        </div>
      </li>
    </Link>
  );
}
