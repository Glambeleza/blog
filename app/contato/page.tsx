import { Metadata } from "next";
import styles from "./page.module.css";
import {
  BiLogoGmail,
  BiLogoInstagramAlt,
  BiLogoTiktok,
  BiLogoYoutube,
} from "react-icons/bi";
import { Form } from "./(components)/form";

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
                <BiLogoInstagramAlt /> instagram.com/glambeleza
              </li>
              <li className={styles.itemInfo}>
                <BiLogoTiktok /> tiktok.com/glambeleza
              </li>
              <li className={styles.itemInfo}>
                <BiLogoYoutube /> youtube.com/glambeleza
              </li>
              <li className={styles.itemInfo}>
                <BiLogoGmail /> contato@glambeleza.com.br
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
