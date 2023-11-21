import { Metadata } from "next";
import styles from "./page.module.css";
import moment from "moment";
import "moment/locale/pt-br";
import Image from "next/image";
import Link from "next/link";
import { AffiliateLink } from "./components/linkProduto";
import { BiArrowBack } from "react-icons/bi";
import { api } from "@/src/data/api";
import { BlogProps } from "@/src/data/types/post";

export const metadata: Metadata = {
  title: "Blog Glambeleza",
  description: "Blog Glambeleza",
};

async function getPost(id: string): Promise<BlogProps> {
  const response = await api(`/post/${id}`);
  const data = await response.json();
  return data;
}

export default async function BlogPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const data = await getPost(id);

  return (
    <div className={styles.container}>
      <div className={styles.tag}>{data?.tag}</div>
      <h1 className={styles.titulo}>{data?.title}</h1>
      <div className={styles?.autor}>
        <div className={styles?.avatar}>
          <Image
            src={data?.author?.avatar}
            alt={data?.author?.name}
            width={50}
            height={50}
            quality={80}
          />
        </div>
        <div className={styles.nome}>{data?.author?.name}</div>
      </div>
      <div className={styles.date}>{moment(data?.date).format("LL")}</div>
      <div className={styles.contImg}>
        <Image
          src={data?.image?.src}
          alt={data?.image?.alt}
          width={1000}
          height={400}
          quality={100}
        />
      </div>
      <p className={styles.resumo}>{data?.summary}</p>

      {data?.paragraphs?.map((paragraph: any, index: number) => (
        <div key={index}>
          <p className={styles.paragrafo}>{paragraph.text}</p>
          {paragraph.linkHref && paragraph.img && (
            <AffiliateLink
              href={paragraph.linkHref}
              imgSrc={paragraph.img.src}
              alt={paragraph.img.alt}
            />
          )}
        </div>
      ))}

      <Link href="/" className={styles.voltar}>
        <BiArrowBack /> Voltar
      </Link>
    </div>
  );
}
