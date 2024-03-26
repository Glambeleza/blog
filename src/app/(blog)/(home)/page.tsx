import "moment/locale/pt-br";
import styles from "./page.module.css";
import PrimaryCard from "./components/primaryCard";
import SecondCard from "./components/secondaryCard";
import { api } from "@/src/data/api";
import { PostProps } from "@/src/data/types/post";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Navegue pelas postagens da Glambeleza que estão repletas de dicas sobre limpeza de pele, cuidados com o corpo, maquiagem, cuidados com o cabelo, emagrecimento e moda, projetadas para ajudá-lo a expressar sua beleza única e realçar sua confiança. Além disso, desvende mitos e verdades sobre produtos para melhorar a saúde do seu corpo, ingredientes naturais e tendências emergentes para tomar decisões corretas sobre o seu bem-estar.",
};

async function getPosts(page?: number): Promise<PostProps[]> {
  const response = await api("/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ page }),
    next: {
      revalidate: 60 * 60 * 1, // 1 hours
    },
  });
  const data = await response?.json();
  return data?.posts;
}

export async function generateStaticParams() {
  const posts = await getPosts();
  const firstAndSecondeItem = posts?.filter((_, index) => index < 2);
  return firstAndSecondeItem?.map((post) => ({
    params: { slug: post.id },
  }));
}

export default async function Home() {
  const page = 1;
  const data = await getPosts(page);
  const firstAndSecondeItem = data?.filter((_, index) => index < 2);
  const restOfItems = data?.filter((_, index) => index > 1);

  return (
    <main className={styles.main}>
      <ul className={styles.firstList}>
        {firstAndSecondeItem?.map((post) => (
          <li key={post.id}>
            <PrimaryCard {...post} />
          </li>
        ))}
      </ul>
      <ul className={styles.secondList}>
        {restOfItems?.map((post) => (
          <li key={post.id}>
            <SecondCard {...post} />
          </li>
        ))}
      </ul>
    </main>
  );
}
