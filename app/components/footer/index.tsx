import styles from "./styles.module.css";

export default function FooterLayout() {
  return (
    <footer className={styles.footer}>
      <p>Copyright © {new Date().getFullYear()} Glambeleza.</p>
    </footer>
  );
}
