import styles from "./page.module.css";
import Form from "./form";

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.image}></div>
      <div className={styles.containerForm}>
        <h2 className={styles.title}>Login</h2>
        <Form />
      </div>
    </div>
  );
}
