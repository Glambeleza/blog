/* eslint-disable @next/next/no-page-custom-font */
import "@/src/app/globals.css";
import { Metadata } from "next";
import Header from "@/src/components/header";
import Footer from "@/src/components/footer";
import { inter, alike } from "@/src/fonts";
import { env } from "@/src/env";
import { ToastContainer } from "react-toastify";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main
        style={{
          maxWidth: "var(--max-width)",
          margin: "0 auto",
        }}
      >
        {children}
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </main>
      <Footer />
    </>
  );
}
