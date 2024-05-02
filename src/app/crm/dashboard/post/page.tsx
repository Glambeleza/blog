import { api } from "@/src/data/api";
import { PostProps } from "@/src/data/types/post";
import React from "react";
import styles from "./page.module.css";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import moment from "moment";
import { Button } from "@/components/ui/button";
import { AddPost } from "./components/addPost";

async function getPosts(page?: number): Promise<PostProps[]> {
  const response = await api("/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ page }),
    next: {
      revalidate: 60 * 60 * 1, // 1 hours
    },
  });
  const data = await response?.json();

  return data?.posts;
}

export async function generateStaticParams() {
  const posts = await getPosts();
  const firstAndSecondeItem = posts?.filter((_, index) => index < 2);
  return firstAndSecondeItem?.map((post) => ({
    params: { slug: post.id },
  }));
}

export default async function Posts() {
  const page = 1;
  const data = await getPosts(page);

  return (
    <div className={styles.container}>
      <div className={styles.contTitle}>
        <h2 className={styles.title}>Page post test</h2>
        <AddPost />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Titulo</TableHead>
            <TableHead>Criado em</TableHead>
            <TableHead>Autor</TableHead>
            <TableHead>Publicado</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item?.id}>
              <TableCell>{item?.id}</TableCell>
              <TableCell>{item?.title}</TableCell>
              <TableCell>{moment(item?.created_at).format("LL")}</TableCell>
              <TableCell>{item?.author?.name}</TableCell>
              <TableCell>
                {item?.published ? (
                  <p style={{ color: "#46ca51", fontWeight: 900 }}>Sim</p>
                ) : (
                  <p style={{ color: "#ca4646", fontWeight: 900 }}>Não</p>
                )}
              </TableCell>
              <TableCell className="text-right">
                <Button>Editar</Button>
                <Button>Deletar</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
