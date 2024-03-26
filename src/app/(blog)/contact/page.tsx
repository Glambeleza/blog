import { Metadata } from "next";
import styles from "./page.module.css";

import { Form } from "./components/form/form";
import Social from "./components/socialMedia/social";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Nós da Glambeleza estamos sempre à disposição para ouvir você. Siga-nos nas nossas redes sociais para ficar por dentro das últimas atualizações. Instagram: instagram.com/glambeleza_oficial/, Facebook: facebook.com/profile.php?id=61553818143882, Pinterest: br.pinterest.com/glambeleza/, TikTok: tiktok.com/@glambeleza , e-mail: contato@glambeleza.com.br",
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
