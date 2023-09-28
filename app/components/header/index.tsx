import Link from "next/link";
import styles from "./iindex.module.css";
import { FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";

export default function HeaderLayout() {
  return (
    <header className={styles.containerHeader}>
      <nav>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href={"/"}>Início</Link>
          </li>
          <li className={styles.item}>
            <Link href={"/contato"}>Contato</Link>
          </li>
        </ul>
      </nav>

      <h1 className={styles.logo}>Glambeleza</h1>

      <nav>
        <ul className={styles.listSocial}>
          <li className={styles.itemSocial}>
            <Link href={"https://www.instagram.com"}>
              <FaInstagram />
            </Link>
          </li>
          <li className={styles.itemSocial}>
            <Link href={"http://www.tiktok.com"}>
              <FaTiktok />
            </Link>
          </li>
          <li className={styles.itemSocial}>
            <Link href={"https://www.youtube.com"}>
              <FaYoutube />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
