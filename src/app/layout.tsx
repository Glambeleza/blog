/* eslint-disable @next/next/no-page-custom-font */
import "./globals.css";
import type { Metadata } from "next";
import Header from "../components/header";
import Footer from "../components/footer";
import { inter, alike } from "@/src/fonts";
import { env } from "../env";

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
