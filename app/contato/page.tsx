import { Metadata } from "next";
import styles from "./page.module.css";
import {
  BiLogoGmail,
  BiLogoInstagramAlt,
  BiLogoTiktok,
  BiLogoYoutube,
} from "react-icons/bi";
import { Form } from "./(components)/form";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contato",
  description: "Contato Glambeleza",
};

export default function ContatoPage() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Contato</h1>
      <div className={styles.containerInfoForm}>
        <div className={styles.containerInfo}>
          <h3 className={styles.titleInfo}>Fale conosco</h3>
          <nav>
            <ul className={styles.listInfo}>
              <li className={styles.itemInfo}>
                <Link href={"https://instagram.com"} target="_blank">
                  <BiLogoInstagramAlt /> <span>instagram.com/glambeleza</span>
                </Link>
              </li>
              <li className={styles.itemInfo}>
                <Link href={"https://tiktok.com"} target="_blank">
                  <BiLogoTiktok /> <span>tiktok.com/glambeleza</span>
                </Link>
              </li>
              <li className={styles.itemInfo}>
                <Link href={"https://youtube.com"} target="_blank">
                  <BiLogoYoutube /> <span>youtube.com/glambeleza</span>
                </Link>
              </li>
              <li className={styles.itemInfo}>
                <Link href={"https://instagram.com"} target="_blank">
                  <BiLogoGmail /> <span>contato@glambeleza.com.br</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.containerForm}>
          <Form />
        </div>
      </div>
    </section>
  );
}
