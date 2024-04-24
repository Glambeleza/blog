import { api } from "@/src/data/api";
import { PostProps } from "@/src/data/types/post";
import React from "react";

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

export default async function Home() {
  const page = 1;
  const data = await getPosts(page);

  return (
    <div>
      <h1>Hello Wolrd</h1>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
