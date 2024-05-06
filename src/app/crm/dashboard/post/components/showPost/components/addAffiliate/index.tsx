import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AiOutlinePlus, AiOutlineSave } from "react-icons/ai";
import { useForm } from "react-hook-form";
import zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./index.module.css";
import { api } from "@/src/data/api";
import { toast } from "react-toastify";

const formValidationSchema = zod.object({
  href: zod.string().url({ message: "Não parece ser um link válido" }),
  title: zod.string().min(3, {
    message: "Insira o nome do produto",
  }),
  image: zod.string().url({ message: "Não parece ser um link válido" }),
});

type FormProp = zod.infer<typeof formValidationSchema>;

export const AddAffiliate: React.FC<{ paragraph_id: string }> = ({
  paragraph_id,
}) => {
  const { register, handleSubmit, formState } = useForm<FormProp>({
    resolver: zodResolver(formValidationSchema),
    defaultValues: {
      title: "",
      href: "",
      image: "",
    },
  });

  async function addAffiliate(valuesForm: FormProp) {
    try {
      const token = localStorage.getItem("@GlambelezaToken");

      const dataValuesForm = {
        ...valuesForm,
        paragraph_id,
      };

      const response = await api("/affiliate", {
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

      toast.success("Afiliado adicionado com sucesso");
    } catch (error) {
      console.log(error);
      toast.success(
        "Algo deu errado! Por favor, tente novamente mais tarde. 😁"
      );
    }
  }
  const { errors, isSubmitting } = formState;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <AiOutlinePlus
            style={{
              fontSize: "1rem",
              cursor: "pointer",
            }}
          />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Adicione uma nova afiliação</DialogTitle>
        </DialogHeader>
        <form
          className={styles.form}
          method="post"
          action=""
          onSubmit={handleSubmit(addAffiliate)}
        >
          <input
            type="text"
            placeholder="Nome do produto"
            className={styles.input}
            {...register("title")}
          />
          {errors.title && (
            <p className={styles.error}>{errors.title.message}</p>
          )}
          <input
            type="text"
            placeholder="Imagem do produto"
            className={styles.input}
            {...register("image")}
          />
          {errors.image && (
            <p className={styles.error}>{errors.image.message}</p>
          )}
          <input
            type="text"
            placeholder="Link do produto"
            className={styles.input}
            {...register("href")}
          />
          {errors.href && <p className={styles.error}>{errors.href.message}</p>}

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
