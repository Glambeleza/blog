import React from "react";
import styles from "./not-found.module.css";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";

export default async function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Ops! </h1>
        <p className={styles.subtitle}>Página não encontrada.</p>
        <p className={styles.description}>
          A página que você está procurando pode ter sido removida ou não está
          disponível temporariamente.
        </p>

        <Link href="/" className={styles.voltar}>
          <BiArrowBack /> Voltar
        </Link>
      </div>
    </div>
  );
}
