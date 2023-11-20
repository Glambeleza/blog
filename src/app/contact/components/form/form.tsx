"use client";
import { useState } from "react";
import styles from "./form.module.css";
import { RiMailSendLine } from "react-icons/ri";
import { CgSpinnerTwo } from "react-icons/cg";
import Swal from "sweetalert2";
import { BiLogoGmail } from "react-icons/bi";
import Link from "next/link";

export function Form() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    const formData = new FormData(event?.currentTarget);
    const data = Object.fromEntries(formData);

    if (data.nome === "" || data.email === "" || data.mensagem === "") {
      Swal.fire("Preencha todos os campos!");
      setLoading(false);
      return;
    }

    try {
      console.log(JSON.stringify(data));
      Swal.fire({
        title: "Obrigado!",
        text: "Sua mensagem foi enviada com sucesso. Retornarei o mais breve possível.",
        icon: "success",
        confirmButtonText: "Ok",
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Ops...",
        text: "Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        action=""
        className={styles.form}
        method="post"
        onSubmit={handleSubmit}
      >
        <input type="text" name="nome" placeholder="Digite seu nome 😁" />

        <input type="email" name="email" placeholder="Digite o seu email 📧" />

        <textarea
          name="mensagem"
          placeholder="Digite uma mensagem 💌"
          rows={6}
        />
        <button type="submit" className={styles.button} disabled={loading}>
          Enviar{" "}
          {loading ? (
            <CgSpinnerTwo className={styles.spiner} />
          ) : (
            <RiMailSendLine />
          )}
        </button>
      </form>
      <p className={styles.textEmail}>
        Se preferir envie um email para{" "}
        <span className={styles.email}>contato@glambeleza.com.br</span>
      </p>
    </>
  );
}
