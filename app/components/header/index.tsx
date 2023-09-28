import Link from "next/link";
import styles from "./iindex.module.css";
import { FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

export default function HeaderLayout() {
  return (
    <header className={styles.containerHeader}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href={"/"}>Início</Link>
          </li>
          <li className={styles.item}>
            <Link href={"/contato"}>Contato</Link>
          </li>
        </ul>
      </nav>

      {/* <h1 className={styles.logo}>Glambeleza</h1> */}
      <h1 className={styles.logo}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="70"
          viewBox="0 0 200 70"
        >
          <defs>
            <linearGradient
              id="text-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stop-color="#eaa59f" />
              <stop offset="100%" stop-color="#6f233f" />
            </linearGradient>
          </defs>
          <text
            x="50%"
            y="50%"
            font-family="Tangerine"
            font-size="50"
            fontWeight={700}
            text-anchor="middle"
            dominant-baseline="middle"
            fill="url(#text-gradient)"
          >
            Glambeleza
          </text>
        </svg>
      </h1>

      <div className={styles.menuMobile}>
        <GiHamburgerMenu />
      </div>

      <nav className={styles.nav}>
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
