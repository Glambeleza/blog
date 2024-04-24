"use client";
import React from "react";
import styles from "./page.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ImSpinner9 } from "react-icons/im";

const formaValidationSchema = zod.object({
  name: zod.string().min(3, {
    message: "Olá, por favor preencha o campo com um nome válido. 😁",
  }),
  password: zod.string().min(6, {
    message: "Olá, por favor preencha o campo. 😁",
  }),
});

type FormProps = zod.infer<typeof formaValidationSchema>;

export default function Login() {
  const { register, handleSubmit, formState } = useForm<FormProps>({
    resolver: zodResolver(formaValidationSchema),
  });
  const { errors, isSubmitting } = formState;

  async function handleForm(props: FormProps): Promise<string> {
    console.log(props);
    return "";
  }

  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <form action="" method="post" onSubmit={handleSubmit(handleForm)}>
        <input
          type="text"
          id="name"
          placeholder="Nome"
          {...register("name")}
          autoComplete="off"
        />
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}
        <input
          type="password"
          id="password"
          placeholder="Senha"
          {...register("password")}
        />
        {errors.password && (
          <p className={styles.error}>{errors.password.message}</p>
        )}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? <ImSpinner9 className={styles.spiner} /> : "Entrar"}
        </button>
      </form>
    </div>
  );
}
