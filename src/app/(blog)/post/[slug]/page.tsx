import "moment/locale/pt-br";
import { Metadata } from "next";
import styles from "./page.module.css";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { AffiliateLink } from "./components/linkProduto";
import { BiArrowBack } from "react-icons/bi";
import { api } from "@/src/data/api";
import { PostProps } from "@/src/data/types/post";
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from "antd";
import { env } from "@/src/env";

async function getPost(slug: string): Promise<PostProps> {
  const response = await api(`/post/${slug}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 60 * 60 * 24 * 7, // 7 days
    },
  });
  const data = await response.json();
  return data?.post;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data = await getPost(params.slug);
  return {
    title: data?.title,
    description: data?.summary,
  };
}

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const post = await getPost(slug);


  return (
    <div className={styles.container}>
      <div className={styles.tag}>{post?.tag}</div>
      <h1 className={styles.titulo}>{post?.title}</h1>
      <div className={styles?.autor}>
        <div className={styles?.avatar}>
          {(post.author.avatar && post.author.avatar !== "")
            ? <Image
              src={`${env.CDN_URL}/${post?.author?.avatar}`}
              alt={post?.author?.name}
              width={50}
              height={50}
              quality={100}
              priority
            />
            : <Avatar size={50} icon={<UserOutlined />} />
          }
        </div>
        <div className={styles.nome}>{post?.author?.name}</div>
      </div>
      <div className={styles.date}>{moment(post?.created_at).format("LL")}</div>
      <div className={styles.contImg}>
        <Image
          src={post?.image || "/opengraph-image.png"}
          alt={post?.title}
          width={980}
          height={400}
          quality={100}
          priority
        />
      </div>
      <p className={styles.resumo}>{post?.summary}</p>

      {post?.paragraphs?.map((paragraph, index) => (
        <div key={index} style={{ padding: 0 }}>
          {paragraph.affiliates && (
            <div>
              <AffiliateLink affiliates={paragraph?.affiliates} />
            </div>
          )}

          <p className={styles.paragrafo}>{paragraph.text}</p>

          {/* {paragraph.image && (
            <Image
              src={paragraph.image}
              alt={"Imagem mostrando produto"}
              width={300}
              height={300}
              quality={100}
            />
          )} */}
        </div>
      ))}

      {/* <Link href="/" className={styles.voltar} title="Voltar">
        <BiArrowBack /> Voltar
      </Link> */}
    </div>
  );
}
