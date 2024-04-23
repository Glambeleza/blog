/* eslint-disable @next/next/no-page-custom-font */
import "./globals.css";
import { Metadata } from "next";
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
  description:
    "Navegue pelas postagens da Glambeleza que estão repletas de dicas sobre limpeza de pele, cuidados com o corpo, maquiagem, cuidados com o cabelo, emagrecimento e moda, projetadas para ajudá-lo a expressar sua beleza única e realçar sua confiança. Além disso, desvende mitos e verdades sobre produtos para melhorar a saúde do seu corpo, ingredientes naturais e tendências emergentes para tomar decisões corretas sobre o seu bem-estar.",

  keywords: [
    "Glambeleza",
    "Glamour",
    "Saúde",
    "bem estar",
    "beleza",
    "pele",
    "cuidados",
    "corpo",
    "maquiagem",
    "cabelo",
    "emagrecimento",
    "moda",
  ],
  robots: "index, follow",
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
