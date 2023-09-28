import { Metadata } from "next";
import {
  BiLogoGmail,
  BiLogoInstagramAlt,
  BiLogoTiktok,
  BiLogoYoutube,
} from "react-icons/bi";
import styles from "./page.module.css";
export const metadata: Metadata = {
  title: "Contato Glambeleza",
  description: "Contato Glambeleza",
};

export default function ContatoPage() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Contato</h1>
      <h2 className={styles.subtitle}>Nós estamos aqui para te ajudar</h2>
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
          <form action="" className={styles.form}>
            <input type="text" name="nome" placeholder="Digite seu nome" />
            <input
              type="email"
              name="email"
              placeholder="Digite o email que você mais usa"
            />
            <textarea
              name="mensagem"
              placeholder="Digite uma mensagem 💌"
              rows={6}
            />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
}
