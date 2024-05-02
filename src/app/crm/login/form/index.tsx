"use client";
import React, { useContext } from "react";
import styles from "./index.module.css";
import { useForm } from "react-hook-form";
import zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ImSpinner9 } from "react-icons/im";
import { api } from "@/src/data/api";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const formaValidationSchema = zod.object({
  name: zod.string().min(3, {
    message: "Olá, por favor preencha o campo com um nome válido. 😁",
  }),
  password: zod.string().min(6, {
    message: "Olá, por favor preencha o campo. 😁",
  }),
});

type FormProps = zod.infer<typeof formaValidationSchema>;

export default function FormLogin() {
  const { register, handleSubmit, formState } = useForm<FormProps>({
    resolver: zodResolver(formaValidationSchema),
  });
  const { errors, isSubmitting } = formState;
  const router = useRouter();

  async function handleForm(props: FormProps): Promise<void> {
    const response = await api("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
      body: JSON.stringify(props),
    });

    const json = await response.json();
    const token = json?.token;

    if (!token) {
      toast.error(json.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    if (token) {
      localStorage.setItem("@GlambelezaToken", token);
      router.push("/crm/dashboard/post");
    }
  }

  return (
    <>
      <form
        action=""
        method="post"
        onSubmit={handleSubmit(handleForm)}
        className={styles.form}
      >
        <input
          type="text"
          id="name"
          placeholder="Nome"
          {...register("name")}
          autoComplete="off"
          className={styles.input}
        />
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}
        <input
          type="password"
          id="password"
          placeholder="Senha"
          {...register("password")}
          className={styles.input}
        />
        {errors.password && (
          <p className={styles.error}>{errors.password.message}</p>
        )}
        <button type="submit" disabled={isSubmitting} className={styles.button}>
          {isSubmitting ? <ImSpinner9 className={styles.spiner} /> : "Entrar"}
        </button>
      </form>
    </>
  );
}
