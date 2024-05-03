import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import styles from "./index.module.css";
import { AiOutlineEye } from "react-icons/ai";
import { PostProps } from "@/src/data/types/post";
import Image from "next/image";
import moment from "moment";
import { ScrollArea } from "@/components/ui/scroll-area";

export const ShowPost: React.FC<PostProps> = (post) => {
  return (
    <Dialog>
      <DialogTrigger>
        {" "}
        <AiOutlineEye />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[1200px]">
        <DialogHeader>
          <DialogTitle>{post?.title}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[600px] w-[1150px] rounded-md border p-4">
          <div className={styles.container}>
            <div className={styles.tag}>{post?.tag}</div>
            <h1 className={styles.titulo}>{post?.title}</h1>
            <div className={styles?.autor}>
              <div className={styles?.avatar}>
                <Image
                  src={post?.author?.avatar}
                  alt={post?.author?.name}
                  width={50}
                  height={50}
                  quality={100}
                />
              </div>
              <div className={styles.nome}>{post?.author?.name}</div>
            </div>
            <div className={styles.date}>
              {moment(post?.created_at).format("LL")}
            </div>
            <div className={styles.contImg}>
              <Image
                src={post?.image || "/opengraph-image.png"}
                alt={post?.title}
                width={980}
                height={400}
                quality={100}
                priority
              />
            </div>
            <p className={styles.resumo}>{post?.summary}</p>

            {post?.paragraphs?.map((paragraph, index) => (
              <div key={index}>
                {paragraph.affiliates && (
                  <div>
                    {/* <AffiliateLink affiliates={paragraph?.affiliates} /> */}
                  </div>
                )}

                <p className={styles.paragrafo}>{paragraph.text}</p>
                {paragraph.image && (
                  <Image
                    src={paragraph.image}
                    alt={"Imagem mostrando produto"}
                    width={300}
                    height={300}
                    quality={100}
                  />
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
