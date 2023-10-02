import { Metadata } from "next";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import moment from "moment";
import "moment/locale/pt-br";
import Image from "next/image";
import img from "/public/2.jpg";

export const metadata: Metadata = {
  title: "Blog Glambeleza",
  description: "Blog Glambeleza",
};

export default function BlogPage({ params }: { params: { id: string } }) {
  const paragrafos = [
    "Simply understood, brand architecture is the art and science of structuring the portfolio to meet your strategic goals, defining the brand number, scope, and relationships needed to compete. Just as Modern Architecture prioritized function, a Brand Architecture is only as good as it is well-suited for the purpose it strives to achieve. Given the disruption observed today across industries and segments, it’s no wonder that companies are considering structural rather than topical solutions to the challenges they face.",

    "Yet the context in which brand architecture decisions are being made has changed. Gone are the days of “competitive strategy”, with the military-inspired view of competition as a zero-sum game, where market share needs to be stolen from competitors, often in a street-by-street battle to win over each individual segment. The type of brand architecture required to win in this game demanded a dogged focus on each segment, and a sniper-like collection of individual brands sharply focused on each one. While there was always a place for a variety of architectures — see Joachimsthaler’s brand relationship spectrum — houses of brands were favored, as it enabled segment-by-segment competition and risk protection. P&G was the king of houses of brands, slicing and dicing the market not just by products and demographics, but also by psychographics, price range, buying patterns or attitudes. In B2B, houses of brands were omnipresent, with a product-driven logic that led to branding new features meant to provide short-term competitive advantage.",

    "In today’s day and age, companies like Google or Amazon do not pursue growth through incremental market share gains; rather, they focus on understanding their customers’ needs and creating entirely new markets to answer them. Creating a house of brands for these markets would be folly — not only would each brand need to be created from scratch, increasing the already significant investment, but the new category itself often needs to be explained to consumers, compounding the cost.",

    "Instead, investing in a strong master brand-led architecture and putting multiple if not all brands under the leadership of a strong brand, presents numerous advantages. First, mergers and acquisitions, or partnerships, are making it necessary to bring multiple market participants to “the same page” — and this common ground often involves a master brand recognized by all.",
  ];
  return (
    <div className={styles.container}>
      <div className={styles.tag}>Beleza</div>
      <h1 className={styles.titulo}>Blog Glambeleza {params.id}</h1>
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
        <p key={index} className={styles.paragrafo}>
          {paragrafo}
        </p>
      ))}
    </div>
  );
}
