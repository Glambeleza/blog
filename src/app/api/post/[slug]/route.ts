import data from "../../data.json";
import { z } from "zod";

interface Params {
  slug: string;
}

export async function GET(request: Request, { params }: { params: Params }) {
  const slug = z.string().parse(params.slug);
  const post = data.find((post) => post.slug === slug);

  return Response.json(post);
}
