import Link from "next/link";
import styles from "./social.module.css";
import {
  BiLogoInstagramAlt,
  BiLogoTiktok,
  BiLogoFacebook,
  BiLogoPinterest,
} from "react-icons/bi";

export default function Social() {
  return (
    <>
      <h3 className={styles.title}>
        Siga nossas redes sociais e fique por dentro de todas as novidades sobre
        beleza e bem-estar!
      </h3>
      <nav>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link
              href={"https://www.instagram.com/glambeleza_oficial/"}
              target="_blank"
              title="Instagram"
            >
              <div className={styles.icon}>
                <BiLogoInstagramAlt />
              </div>{" "}
              <p className={styles.socialName}>
                instagram.com/glambeleza_oficial
              </p>
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              href={"https://www.tiktok.com/@glambeleza"}
              target="_blank"
              title="Tiktok"
            >
              <div className={styles.icon}>
                <BiLogoTiktok />
              </div>{" "}
              <p className={styles.socialName}>
                tiktok.com/glambeleza/@glambeleza
              </p>
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              href={"https://www.facebook.com/profile.php?id=61553818143882"}
              target="_blank"
              title="Facebook"
            >
              <div className={styles.icon}>
                <BiLogoFacebook />
              </div>{" "}
              <p className={styles.socialName}>facebook.com/glambeleza</p>
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              href={"https://br.pinterest.com/glambeleza/"}
              target="_blank"
              title="Pinterest"
            >
              <div className={styles.icon}>
                <BiLogoPinterest />
              </div>{" "}
              <p className={styles.socialName}>pinterest.com/glambeleza</p>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
