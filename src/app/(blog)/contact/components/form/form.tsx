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
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event?.currentTarget);
    const data = Object.fromEntries(formData);

    if (data.name === "" || data.email === "" || data.message === "") {
      Swal.fire("Por favor, preencha todos os campos.");
      setLoading(false);
      return;
    }

    try {
      Swal.fire({
        title: "Obrigado!",
        text: "Sua mensagem foi enviada com sucesso. Retornarei o mais breve possível.",
        icon: "success",
        confirmButtonText: "Ok",
      });
    } catch (error) {
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
      <h3 className={styles.title}>👋 Olá, envie aqui uma sugestão de post</h3>
      <form
        action=""
        className={styles.form}
        method="post"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <input type="text" name="name" placeholder="Digite seu nome 😁" />

        <input type="email" name="email" placeholder="Digite o seu email 📧" />

        <textarea
          name="message"
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
