import {
  FaTiktok,
  FaInstagram,
  FaFacebookF,
  FaPinterest,
  FaPinterestP,
} from "react-icons/fa";
import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";
import { inter } from "@/src/fonts";

export default function Header() {
  return (
    <header className={styles.containerHeader}>
      <nav className={styles.nav}>
        <ul className={`${styles.list}`}>
          <li className={`${styles.item} ${inter.className}`}>
            <Link href={"/"}>Início</Link>
          </li>
          <li className={`${styles.item} ${inter.className}`}>
            <Link href={"/contact"}>Contato</Link>
          </li>
        </ul>
      </nav>

      <h1 className={styles.logo}>
        <Image src="/logo.png" alt="Glambeleza" width={200} height={200} />
      </h1>

      <nav className={styles.nav}>
        <ul className={styles.listSocial}>
          <li className={styles.itemSocial}>
            <Link
              href={"https://www.instagram.com/glambeleza_oficial/"}
              target="_blank"
            >
              <FaInstagram />
            </Link>
          </li>
          <li className={styles.itemSocial}>
            <Link href={"https://www.tiktok.com/@glambeleza"} target="_blank">
              <FaTiktok />
            </Link>
          </li>
          <li className={styles.itemSocial}>
            <Link
              href={"https://www.facebook.com/profile.php?id=61553818143882"}
              target="_blank"
            >
              <FaFacebookF />
            </Link>
          </li>
          <li className={styles.itemSocial}>
            <Link href={"https://br.pinterest.com/glambeleza/"} target="_blank">
              <FaPinterestP />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
