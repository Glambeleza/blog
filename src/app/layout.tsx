/* eslint-disable @next/next/no-page-custom-font */
import "./globals.css";
import type { Metadata } from "next";
import Header from "../components/header";
import Footer from "../components/footer";
import { inter, alike } from "@/src/fonts";
import { env } from "../env";
import Head from "next/head";

export const metadata: Metadata = {
  metadataBase: new URL(env.URL_IMAGE),
  title: {
    default: "Glambeleza",
    template: "%s | Glambeleza",
  },
  description: "Glambeleza",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className={inter.className}>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#6f233f" />
        <meta name="msapplication-TileColor" content="#6f233f" />
        <meta name="theme-color" content="#6f233f" />

        <meta property="og:image" content="<generated>" />
        <meta property="og:image:alt" content="Glambeleza" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <body>
        <Header />
        <main
          style={{
            maxWidth: "var(--max-width)",
            margin: "0 auto",
          }}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
