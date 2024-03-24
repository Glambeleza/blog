import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    URL_IMAGE: z.string().url(),
    RESEND_API_KEY: z.string().min(1),
    RESEND_API_EMAIL: z.string().email(),
  },
  client: {
    NEXT_PUBLIC_API_URL: z.string().url(),
    NEXT_PUBLIC_URL_IMAGE: z.string().url(),
  },
  // If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually
  runtimeEnv: {
    URL_IMAGE: process.env.URL_IMAGE,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_API_EMAIL: process.env.RESEND_API_EMAIL,
    NEXT_PUBLIC_URL_IMAGE: process.env.NEXT_PUBLIC_URL_IMAGE,
  },
  // For Next.js >= 13.4.4, you only need to destructure client variables:
  // experimental__runtimeEnv: {
  //   NEXT_PUBLIC_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_PUBLISHABLE_KEY,
  // }
});
