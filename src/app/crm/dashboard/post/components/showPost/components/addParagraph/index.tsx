"use client";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import styles from "./index.module.css";
import { AiOutlinePlus, AiOutlineSave } from "react-icons/ai";
import { useForm } from "react-hook-form";
import zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { api } from "@/src/data/api";
import { toast } from "react-toastify";
import React from "react";

const formValidationSchema = zod.object({
  text: zod.string().min(100, {
    message: "O texto do parágrafo deve conter pelo menos 100 caracteres",
  }),
  image: zod.string().optional(),
});

type FormProps = zod.infer<typeof formValidationSchema>;

export const AddParagraph: React.FC<{ post_id: string }> = ({ post_id }) => {
  const { register, handleSubmit, formState } = useForm<FormProps>({
    resolver: zodResolver(formValidationSchema),
    defaultValues: {
      text: "",
      image: "",
    },
  });

  const { errors, isSubmitting } = formState;

  async function addParagraph(valuesForm: FormProps) {
    try {
      const token = localStorage.getItem("@GlambelezaToken");

      const dataValuesForm = {
        ...valuesForm,
        post_id,
      };

      const response = await api("/paragraph", {
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
        console.log(data?.message);
        return toast.error(data?.message);
      }

      toast.success("Parágrafo adicionado com sucesso");
    } catch (error) {
      console.log(error);
      toast.success(
        "Algo deu errado! Por favor, tente novamente mais tarde. 😁"
      );
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <AiOutlinePlus
            style={{
              fontSize: "2rem",
              cursor: "pointer",
            }}
          />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[980px]">
        <DialogHeader>
          <DialogTitle>Adicione conteúdo</DialogTitle>
        </DialogHeader>
        <form
          className={styles.form}
          method="post"
          action=""
          onSubmit={handleSubmit(addParagraph)}
        >
          <textarea
            rows={8}
            className={styles.input}
            placeholder="Digite seu texto aqui"
            {...register("text")}
          />

          {errors.text && <p className={styles.error}>{errors.text.message}</p>}

          <input
            className={styles.input}
            placeholder="Link da imagem"
            {...register("image")}
          />
          {errors.image && (
            <p className={styles.error}>{errors.image.message}</p>
          )}

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
};
