import styles from "./index.module.css";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import type { PostProps } from "@/src/data/types/post";
import MarkText from "../../components/markText";
import { Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';

export default async function PrimaryCard(post: PostProps) {
  return (
    <div key={post?.id} className={styles.container}>
      <Link href={`/post/${post?.slug}`} title={post?.title}>
        <div className={styles.cont}>
          <div className={styles.firstContImg}>
            <Image
              src={post?.image || "/logo-dark.svg"}
              alt={"Imagem principal do conteúdo sobre " + post?.title}
              width={500}
              height={500}
              quality={100}
              priority
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
                  {(post.author.avatar && post.author.avatar !== "")
                    ? <Image
                      src={post?.author?.avatar}
                      alt={post?.author?.name}
                      width={25}
                      height={25}
                      quality={100}
                      priority
                    />
                    : <Avatar size={25} icon={<UserOutlined />} />
                  }
                </div>
                <div className={styles.nome} >{post?.author?.name}</div>
              </div>
              <p className={styles.date}>
                {moment(post?.created_at).format("LL")}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
