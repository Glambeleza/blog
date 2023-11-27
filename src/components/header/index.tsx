import { FaTiktok, FaInstagram, FaFacebookF } from "react-icons/fa";
import Link from "next/link";
import styles from "./index.module.css";

export default function Header() {
  return (
    <header className={styles.containerHeader}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href={"/"}>Início</Link>
          </li>
          <li className={styles.item}>
            <Link href={"/contact"}>Contato</Link>
          </li>
        </ul>
      </nav>

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
              <stop offset="0%" stopColor="#eaa59f" />
              <stop offset="100%" stopColor="#6f233f" />
            </linearGradient>
          </defs>
          <text
            x="50%"
            y="50%"
            fontFamily="Tangerine"
            fontSize="50"
            fontWeight={700}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="url(#text-gradient)"
          >
            Glambeleza
          </text>
        </svg>
      </h1>

      <nav className={styles.nav}>
        <ul className={styles.listSocial}>
          <li className={styles.itemSocial}>
            <Link href={"https://www.instagram.com"} target="_blank">
              <FaInstagram />
            </Link>
          </li>
          <li className={styles.itemSocial}>
            <Link href={"http://www.tiktok.com"} target="_blank">
              <FaTiktok />
            </Link>
          </li>
          <li className={styles.itemSocial}>
            <Link href={"https://www.facebook.com"} target="_blank">
              <FaFacebookF />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
