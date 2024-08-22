import { ImageResponse } from "next/og";
import Image from "next/image";
import { PostProps } from "@/src/data/types/post";
import { api } from "@/src/data/api";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Glambeleza";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

async function getPost(slug: string): Promise<PostProps> {
  const response = await api(`/post/${slug}`);
  const data = await response.json();

  return data;
}

// Image generation
export default async function OgImage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  return new ImageResponse(
    (
      <div
        style={{
          background: "#555",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <Image src={post.image} alt={"Imagem do post glabeleza," + post.title} width={1200} height={630} />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
