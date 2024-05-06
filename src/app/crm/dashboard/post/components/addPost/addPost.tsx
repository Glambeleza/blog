"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

import styles from "./addPost.module.css";
import { type SubmitHandler, useForm } from "react-hook-form";
import zod from "zod";
import { api } from "@/src/data/api";

import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { AiOutlineSave } from "react-icons/ai";

const formValidationSchema = zod.object({
  title: zod.string().min(3, {
    message: "Olá, por favor informe o título.",
  }),
  tag: zod.string().min(3, {
    message: "Olá, por favor informe a TAG.",
  }),
  summary: zod.string().min(10, {
    message: "Olá, por favor preencha o sumário.",
  }),
  image: zod.string().min(3, {
    message:
      "Olá, por favor preencha este campo com um código da imagem unsplash.",
  }),
});

type FormProps = zod.infer<typeof formValidationSchema>;

export function AddPost() {
  const { register, handleSubmit, formState } = useForm<FormProps>({
    resolver: zodResolver(formValidationSchema),
    defaultValues: {
      title: "",
      summary: "",
      tag: "",
      image: "",
    },
  });
  const { errors, isSubmitting } = formState;

  function createSlug(title: string): string {
    let slug = title.toLowerCase();
    slug = slug.trim().replace(/[^a-z0-9]/g, "-");
    slug = slug.replace(/--+/g, "-");
    slug = slug.replace(/^-+|-+$/g, "");
    return slug;
  }

  const handleSubmitForm = async (formValues: FormProps) => {
    try {
      const token = localStorage.getItem("@GlambelezaToken");

      const dataValuesForm = {
        ...formValues,
        slug: createSlug(formValues?.title),
      };

      const response = await api("/post", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        cache: "no-cache",
        body: JSON.stringify(dataValuesForm),
        credentials: "include",
      });

      const data = await response.json();
      if (data.error) {
        console.log(data.error);
        return toast.error(
          "Algo deu errado! Por favor, tente novamente mais tarde. 😁"
        );
      }

      toast.success("Post cadastrado com sucesso");
    } catch (error) {
      console.log(error);
      toast.success("erro");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Novo Post</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[850px]">
        <DialogHeader>
          <DialogTitle>Novo Post</DialogTitle>
        </DialogHeader>

        <form
          className={styles.form}
          method="post"
          action=""
          onSubmit={handleSubmit(handleSubmitForm)}
        >
          <input
            type="text"
            {...register("title")}
            className={styles.input}
            placeholder="Título"
          />
          {errors.title && (
            <p className={styles.error}>{errors.title.message}</p>
          )}

          <textarea
            {...register("summary")}
            className={styles.input}
            placeholder="Sumário"
            rows={5}
          />

          {errors.summary && (
            <p className={styles.error}>{errors.summary.message}</p>
          )}

          <div className={styles.contSelect}>
            <div>
              <select {...register("tag")} className={styles.select}>
                <option value="SAÚDE">Saúde</option>
                <option value="BELEZA">Beleza</option>
                <option value="BEM-ESTAR">Bem-estar</option>
              </select>

              {errors.tag && (
                <p className={styles.error}>{errors.tag?.message}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                {...register("image")}
                className={styles.input}
                placeholder="Imagem"
              />

              {errors.image && (
                <p className={styles.error}>{errors.image.message}</p>
              )}
            </div>
          </div>

          <DialogFooter>
            <Button type="submit" disabled={isSubmitting}>
              <AiOutlineSave
                style={{
                  fontSize: "2rem",
                  cursor: "pointer",
                }}
              />
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
