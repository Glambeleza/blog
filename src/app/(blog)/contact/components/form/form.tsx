"use client";
import { useState } from "react";
import styles from "./form.module.css";
import { RiMailSendLine } from "react-icons/ri";
import { CgSpinnerTwo } from "react-icons/cg";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import zod from "zod";

const formValidationSchema = zod.object({
  name: zod.string().min(3, {
    message: "Olá, por favor preencha o campo com um nome válido. 😁",
  }),
  email: zod.string().email({
    message: "Olá, por favor preencha o campo com um e-mail válido. 😁",
  }),
  message: zod.string().min(3, {
    message: "Olá, por favor preencha o campo com uma mensagem. 😁",
  }),
});

export type FormProps = zod.infer<typeof formValidationSchema>;

export function Form() {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState, reset } = useForm<FormProps>({
    resolver: zodResolver(formValidationSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const { errors } = formState;

  const handleForm = async (props: FormProps) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ props }),
      });
      const data = await response.json();
      setLoading(false);

      if (data.error) {
        return Swal.fire({
          icon: "error",
          iconHtml: "😬",
          title: "Ops, algo deu errado!",
          text: "Por favor, tente novamente mais tarde. 😁",
          confirmButtonText: "Ok",
        });
      }

      reset();
      return Swal.fire({
        icon: "success",
        iconHtml: "😍",
        title: "Sugestão enviada com sucesso!",
        text: "Obrigado por enviar sua sugestão de post, em breve entraremos em contato. 😁",
        confirmButtonText: "Ok",
      });
    } catch (error) {
      setLoading(false);
      return Swal.fire({
        icon: "error",
        iconHtml: "😬",
        title: "Ops, algo deu errado!",
        text: "Por favor, tente novamente mais tarde. 😁",
        confirmButtonText: "Ok",
      });
    }
  };

  return (
    <>
      <h3 className={styles.title}>👋 Olá, envie aqui uma sugestão de post</h3>
      <form
        action=""
        className={styles.form}
        method="post"
        onSubmit={handleSubmit(handleForm)}
        autoComplete="off"
      >
        <input
          id="name"
          type="text"
          placeholder="Digite seu nome 😁"
          autoComplete="off"
          {...register("name")}
        />
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}

        <input
          id="email"
          type="email"
          placeholder="Digite o seu email 📧"
          autoComplete="off"
          {...register("email")}
        />

        {errors.email && <p className={styles.error}>{errors.email.message}</p>}

        <textarea
          id="message"
          placeholder="Digite uma mensagem 💌"
          rows={6}
          autoComplete="off"
          {...register("message")}
        />

        {errors.message && (
          <p className={styles.error}>{errors.message.message}</p>
        )}

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
