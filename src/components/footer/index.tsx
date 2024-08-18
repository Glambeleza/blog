import Link from "next/link";
import styles from "./index.module.css";
import { BiLogoFacebook, BiLogoInstagramAlt, BiLogoPinterest, BiLogoTiktok, BiLogoYoutube } from "react-icons/bi";
export default function Footer() {
  return (
    <footer className={styles.footer}>
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
      <p>© {new Date().getFullYear()} Glambeleza.</p>
    </footer>
  );
}
