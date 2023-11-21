import { Metadata } from "next";
import styles from "./page.module.css";
import moment from "moment";
import "moment/locale/pt-br";
import Image from "next/image";
import img from "/public/13.jpg";
import Link from "next/link";
import { AffiliateLink } from "./components/linkProduto";
import { BiArrowBack } from "react-icons/bi";

export const metadata: Metadata = {
  title: "Blog Glambeleza",
  description: "Blog Glambeleza",
};

export interface AuthorProps {
  name: string;
  avatar: string;
}

export interface ImageProps {
  src: string;
  alt: string;
}

export interface AffiliateLinkProps {
  href: string;
  to: string;
  platform: string;
}

export interface ParagraphProps {
  text: string;
  img?: ImageProps;
  linkHref?: AffiliateLinkProps[];
}

export interface BlogProps {
  tag: string;
  title: string;
  date: string;
  author: AuthorProps;
  image: ImageProps;
  summary: string;
  paragraphs: ParagraphProps[];
}

export default async function BlogPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const response = await fetch(`http://localhost:3000/api/post/${id}`);
  const json = await response.json();
  const data = json;

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
      <div className={styles.date}>{data?.date}</div>
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
