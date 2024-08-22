import {
  BiLogoInstagramAlt,
  BiLogoPinterest,
  BiLogoFacebook,
  BiLogoTiktok,
  BiLogoYoutube,
} from "react-icons/bi";
import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";
import { inter } from "@/src/fonts";

export default function Header() {
  return (
    <header className={styles.containerHeader}>

      <nav className={styles.nav}>
        <ul className={`${styles.list}`}>
          <Link href={"/"} title="Início">
            <li className={`${styles.item} ${inter.className}`}>
              Início
            </li>
          </Link>
          <Link href={"/contact"} title="Contato">
            <li className={`${styles.item} ${inter.className}`}>
              Contato
            </li>
          </Link>
        </ul>
      </nav>

      <h1 className={styles.logo}>
        <Image
          src="/logo.svg"
          alt="Logo da Glambeleza, um desenho de uma mulher usando um chapéu com traços delicados "
          width={200}
          height={200}
          priority
          fetchPriority="high"
        />
      </h1>

      <nav className={styles.nav}>
        <ul className={styles.listSocial}>

          <Link
            href={"https://www.instagram.com/glambeleza_oficial/"}
            target="_blank"
            title="Instagram"
          >
            <li className={styles.itemSocial}>
              <BiLogoInstagramAlt />
            </li>
          </Link>

          <Link
            href={"https://www.tiktok.com/@glambeleza"}
            target="_blank"
            title="Tiktok"
          >
            <li className={styles.itemSocial}>
              <BiLogoTiktok />
            </li>
          </Link>
          <Link
            href={"https://www.facebook.com/profile.php?id=61553818143882"}
            target="_blank"
            title="Facebook"
          >
            <li className={styles.itemSocial}>
              <BiLogoFacebook />
            </li>
          </Link>

          <Link
            href={"https://www.youtube.com/@glambeleza-q9j"}
            target="_blank"
            title="You tube"
          >
            <li className={styles.itemSocial}>
              <BiLogoYoutube />
            </li>
          </Link>

          <Link
            href={"https://br.pinterest.com/glambeleza/"}
            target="_blank"
            title="Pinterest"
          >
            <li className={styles.itemSocial}>
              <BiLogoPinterest />
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
