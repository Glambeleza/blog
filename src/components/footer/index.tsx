import styles from "./index.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Glambeleza.</p>
    </footer>
  );
}
