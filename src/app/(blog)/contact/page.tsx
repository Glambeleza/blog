import { Metadata } from "next";
import styles from "./page.module.css";

import { Form } from "./components/form/form";
import Social from "./components/socialMedia/social";

export const metadata: Metadata = {
  title: "Contato",
  description: "Contato Glambeleza",
};

export default function ContatoPage() {
  return (
    <section className={styles.container}>
      <div className={styles.containerInfoForm}>
        <div className={styles.containerInfo}>
          <Social />
        </div>
        <div className={styles.containerForm}>
          <Form />
        </div>
      </div>
    </section>
  );
}
