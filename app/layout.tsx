import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "./layout.module.css";
import { FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Glambeleza",
    template: "%s | Glambeleza",
  },
  description: "Glambeleza",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
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
        {children}
        <footer className={styles.footer}>
          <p>Copyright © {new Date().getFullYear()} Glambeleza.</p>
        </footer>
      </body>
    </html>
  );
}
