import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Glambeleza",
  description: "Blog Glambeleza",
};

export default function BlogPage({ params }: { params: { slug: string } }) {
  return (
    <>
      <h1>Blog Glambeleza {params.slug}</h1>
    </>
  );
}
