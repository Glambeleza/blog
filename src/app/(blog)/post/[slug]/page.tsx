import "moment/locale/pt-br";
import { Metadata } from "next";
import styles from "./page.module.css";
import moment from "moment";
import Image from "next/image";
import { AffiliateLink } from "./components/linkProduto";
import { api } from "@/src/data/api";
import { PostProps } from "@/src/data/types/post";
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from "antd";
import { env } from "@/src/env";
import BackToTopButton from "./components/returnTop";

async function getPost(slug: string): Promise<PostProps> {

  const response = await api(`/post/${slug}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 60 * 60 * 1 // 1h,
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

  if (!data) {
    return {
      title: "Infelismente não foi possível localizar o post.",
      description: "Navegue pelas postagens da Glambeleza que estão repletas de dicas. Com certeza você encontrará o que procura em glambeleza.com.br",
    };
  }


  return {
    title: data?.title || "Glambeleza",
    description: data?.summary || "Navegue pelas postagens da Glambeleza que estão repletas de dicas sobre limpeza de pele, cuidados com o corpo, maquiagem, cuidados com o cabelo, emagrecimento e moda, projetadas para ajudá-lo a expressar sua beleza única e realçar sua confiança. Além disso, desvende mitos e verdades sobre produtos para melhorar a saúde do seu corpo, ingredientes naturais e tendências emergentes para tomar decisões corretas sobre o seu bem-estar.",

    openGraph: {
      title: data?.title || "Glambeleza",
      description: data?.summary || "Navegue pelas postagens da Glambeleza que estão repletas de dicas sobre limpeza de pele, cuidados com o corpo, maquiagem, cuidados com o cabelo, emagrecimento e moda, projetadas para ajudá-lo a expressar sua beleza única e realçar sua confiança. Além disso, desvende mitos e verdades sobre produtos para melhorar a saúde do seu corpo, ingredientes naturais e tendências emergentes para tomar decisões corretas sobre o seu bem-estar.",
      url: `https://glambeleza.com.br/post/${data?.slug}`,
      images: [
        {
          url: data?.image || "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: data?.title || "Glambeleza",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: data?.title || "Glambeleza",
      description: data?.summary || "Navegue pelas postagens da Glambeleza que estão repletas de dicas sobre limpeza de pele, cuidados com o corpo, maquiagem, cuidados com o cabelo, emagrecimento e moda, projetadas para ajudá-lo a expressar sua beleza única e realçar sua confiança. Além disso, desvende mitos e verdades sobre produtos para melhorar a saúde do seu corpo, ingredientes naturais e tendências emergentes para tomar decisões corretas sobre o seu bem-estar.",
      images: data?.image || "/opengraph-image.png",
    },
    robots: "index, follow",
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
              alt={"Imagem do usuário glabeleza," + post?.author?.name}
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
          alt={"Imagem do post glabeleza," + post?.title}
          width={980}
          height={400}
          quality={100}
          priority
        />
      </div>
      <p className={styles.resumo}>{post?.summary}</p>

      {post?.paragraphs?.map((paragraph, index) => (
        <div key={index} style={{ padding: 0, width: "100%" }}>
          {paragraph.affiliates && (
            <div>
              <AffiliateLink affiliates={paragraph?.affiliates} />
            </div>
          )}

          <h3 className={styles.subTitle}>{paragraph.subtitle}</h3>
          {paragraph.text.split('\n').map((line, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: line.replace(/#(.*?)#/g, '<span style="color: #fa6e77; font-weight: bold;">$1</span>') }} className={styles.paragrafo} />
          ))}
        </div>
      ))}

      <BackToTopButton />
    </div>
  );
}
