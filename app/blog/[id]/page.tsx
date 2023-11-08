import { Metadata } from "next";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import moment from "moment";
import "moment/locale/pt-br";
import Image from "next/image";
import img from "/public/13.jpg";
import Link from "next/link";
import { AffiliateLink } from "./(components)/linkProduto";
import { BiArrowBack } from "react-icons/bi";
import type { AffiliateLinkProps } from "./(components)/linkProduto";

export const metadata: Metadata = {
  title: "Blog Glambeleza",
  description: "Blog Glambeleza",
};

export interface BlogPageProps {
  text: string;
  linkHref?: AffiliateLinkProps[];
  imgSrc?: string;
  alt?: string;
}

export interface AutorProps {
  name: string;
  avatar: string;
}

export default function BlogPage({ params }: { params: { id: string } }) {
  const autor: AutorProps = {
    name: "Ieda Helen",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ic3qZGR2oA96imNITrFcgLkb3H-747rbDg3Q_BzUdOxoOT2C-YHct0SObLpa3wA4vyc",
  };
  const paragrafos: BlogPageProps[] = [
    {
      text: "Simply understood, brand architecture is the art and science of structuring the portfolio to meet your strategic goals, defining the brand number, scope, and relationships needed to compete. Just as Modern Architecture prioritized function, a Brand Architecture is only as good as it is well-suited for the purpose it strives to achieve. Given the disruption observed today across industries and segments, it’s no wonder that companies are considering structural rather than topical solutions to the challenges they face.",
      linkHref: [
        {
          href: "https://www.amazon.com.br/M%C3%A1scara-Tratamento-Pantene-Bambu-600Ml/dp/B088P95YR5?_encoding=UTF8&brr=1&content-id=amzn1.sym.9d5235c0-50b3-4a9a-af53-5c115e367234&pd_rd_r=8ae3d993-61fa-408f-96c4-c0fa96351d53&pd_rd_w=4XGKv&pd_rd_wg=WroO0&pf_rd_p=9d5235c0-50b3-4a9a-af53-5c115e367234&pf_rd_r=8GPQESJ3Y561SMVZZMRQ&qid=1696288651&rd=1&s=beauty&sr=1-12&th=1&linkCode=li3&tag=xane0a-20&linkId=461872f6599e5ee5eb171976399d21b2&language=pt_BR&ref_=as_li_ss_il",
          irPara: "na Amazon",
          plataforma: "amazon",
        },
        {
          href: "https://www.amazon.com.br/M%C3%A1scara-Tratamento-Pantene-Bambu-600Ml/dp/B088P95YR5?_encoding=UTF8&brr=1&content-id=amzn1.sym.9d5235c0-50b3-4a9a-af53-5c115e367234&pd_rd_r=8ae3d993-61fa-408f-96c4-c0fa96351d53&pd_rd_w=4XGKv&pd_rd_wg=WroO0&pf_rd_p=9d5235c0-50b3-4a9a-af53-5c115e367234&pf_rd_r=8GPQESJ3Y561SMVZZMRQ&qid=1696288651&rd=1&s=beauty&sr=1-12&th=1&linkCode=li3&tag=xane0a-20&linkId=461872f6599e5ee5eb171976399d21b2&language=pt_BR&ref_=as_li_ss_il",
          irPara: "na Shopee",
          plataforma: "shopee",
        },
        {
          href: "https://www.amazon.com.br/M%C3%A1scara-Tratamento-Pantene-Bambu-600Ml/dp/B088P95YR5?_encoding=UTF8&brr=1&content-id=amzn1.sym.9d5235c0-50b3-4a9a-af53-5c115e367234&pd_rd_r=8ae3d993-61fa-408f-96c4-c0fa96351d53&pd_rd_w=4XGKv&pd_rd_wg=WroO0&pf_rd_p=9d5235c0-50b3-4a9a-af53-5c115e367234&pf_rd_r=8GPQESJ3Y561SMVZZMRQ&qid=1696288651&rd=1&s=beauty&sr=1-12&th=1&linkCode=li3&tag=xane0a-20&linkId=461872f6599e5ee5eb171976399d21b2&language=pt_BR&ref_=as_li_ss_il",
          irPara: "no site",
          plataforma: "site",
        },
      ],
      imgSrc:
        "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B088P95YR5&Format=_SL250_&ID=AsinImage&MarketPlace=BR&ServiceVersion=20070822&WS=1&tag=xane0a-20&language=pt_BR",
      alt: "Máscara de Tratamento Pantene Bambu 600Ml",
    },
    {
      text: "SYet the context in which brand architecture decisions are being made has changed. Gone are the days of “competitive strategy”, with the military-inspired view of competition as a zero-sum game, where market share needs to be stolen from competitors, often in a street-by-street battle to win over each individual segment. The type of brand architecture required to win in this game demanded a dogged focus on each segment, and a sniper-like collection of individual brands sharply focused on each one. While there was always a place for a variety of architectures — see Joachimsthaler’s brand relationship spectrum — houses of brands were favored, as it enabled segment-by-segment competition and risk protection. P&G was the king of houses of brands, slicing and dicing the market not just by products and demographics, but also by psychographics, price range, buying patterns or attitudes. In B2B, houses of brands were omnipresent, with a product-driven logic that led to branding new features meant to provide short-term competitive advantage.",
    },
    {
      text: "Instead, investing in a strong master brand-led architecture and putting multiple if not all brands under the leadership of a strong brand, presents numerous advantages. First, mergers and acquisitions, or partnerships, are making it necessary to bring multiple market participants to “the same page” — and this common ground often involves a master brand recognized by all.",
      linkHref: [
        {
          href: "https://www.amazon.com.br/M%C3%A1scara-Tratamento-Pantene-Bambu-600Ml/dp/B088P95YR5?_encoding=UTF8&brr=1&content-id=amzn1.sym.9d5235c0-50b3-4a9a-af53-5c115e367234&pd_rd_r=8ae3d993-61fa-408f-96c4-c0fa96351d53&pd_rd_w=4XGKv&pd_rd_wg=WroO0&pf_rd_p=9d5235c0-50b3-4a9a-af53-5c115e367234&pf_rd_r=8GPQESJ3Y561SMVZZMRQ&qid=1696288651&rd=1&s=beauty&sr=1-12&th=1&linkCode=li3&tag=xane0a-20&linkId=461872f6599e5ee5eb171976399d21b2&language=pt_BR&ref_=as_li_ss_il",
          irPara: "na Amazon",
          plataforma: "amazon",
        },
        {
          href: "https://www.amazon.com.br/M%C3%A1scara-Tratamento-Pantene-Bambu-600Ml/dp/B088P95YR5?_encoding=UTF8&brr=1&content-id=amzn1.sym.9d5235c0-50b3-4a9a-af53-5c115e367234&pd_rd_r=8ae3d993-61fa-408f-96c4-c0fa96351d53&pd_rd_w=4XGKv&pd_rd_wg=WroO0&pf_rd_p=9d5235c0-50b3-4a9a-af53-5c115e367234&pf_rd_r=8GPQESJ3Y561SMVZZMRQ&qid=1696288651&rd=1&s=beauty&sr=1-12&th=1&linkCode=li3&tag=xane0a-20&linkId=461872f6599e5ee5eb171976399d21b2&language=pt_BR&ref_=as_li_ss_il",
          irPara: "na Shopee",
          plataforma: "shopee",
        },
        {
          href: "https://www.amazon.com.br/M%C3%A1scara-Tratamento-Pantene-Bambu-600Ml/dp/B088P95YR5?_encoding=UTF8&brr=1&content-id=amzn1.sym.9d5235c0-50b3-4a9a-af53-5c115e367234&pd_rd_r=8ae3d993-61fa-408f-96c4-c0fa96351d53&pd_rd_w=4XGKv&pd_rd_wg=WroO0&pf_rd_p=9d5235c0-50b3-4a9a-af53-5c115e367234&pf_rd_r=8GPQESJ3Y561SMVZZMRQ&qid=1696288651&rd=1&s=beauty&sr=1-12&th=1&linkCode=li3&tag=xane0a-20&linkId=461872f6599e5ee5eb171976399d21b2&language=pt_BR&ref_=as_li_ss_il",
          irPara: "no site",
          plataforma: "site",
        },
      ],
      imgSrc:
        "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B088P95YR5&Format=_SL250_&ID=AsinImage&MarketPlace=BR&ServiceVersion=20070822&WS=1&tag=xane0a-20&language=pt_BR",
      alt: "Máscara de Tratamento Pantene Bambu 600Ml",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.tag}>Beleza</div>
      <h1 className={styles.titulo}>Blog Glambeleza {params.id}</h1>
      <div className={styles.autor}>
        <div className={styles.avatar}>
          {/* <Image src={autor.avatar} alt="" width={50} height={50} /> */}
          <img src={autor.avatar} alt="" />
        </div>
        <div className={styles.nome}>{autor.name}</div>
      </div>
      <div className={styles.date}>{moment().format("LL")}</div>
      <div className={styles.contImg}>
        <Image src={img} alt="" width={1200} height={300} />
      </div>
      <p className={styles.resumo}>
        Reinvention often comes in spurts, after a long period of silence. Just
        as modern architecture recently enjoyed a comeback, brand architecture,
        a field with well-established principles for decades, is back in the
        limelight.
      </p>

      {paragrafos.map((paragrafo, index) => (
        <div key={index}>
          <p className={styles.paragrafo}>{paragrafo.text}</p>

          <AffiliateLink
            href={paragrafo.linkHref ?? []}
            imgSrc={paragrafo.imgSrc ?? ""}
            alt={paragrafo.alt ?? ""}
          />
        </div>
      ))}

      <Link href="/" className={styles.voltar}>
        <BiArrowBack /> Voltar
      </Link>
    </div>
  );
}
