"use client";
import { Button } from "@/components/ui/button";
import styles from "./layout.module.css";
import { AuthProvider } from "@/src/context/AutheContext";
import Image from "next/image";
import { useEffect, useLayoutEffect } from "react";
import { ToastContainer } from "react-toastify";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = window.localStorage.getItem("@GlambelezaToken");

  useLayoutEffect(() => {
    if (!token) {
      window.location.href = "/";
    }
  }, [token]);

  return (
    token && (
      <>
        <AuthProvider>
          <div>
            <div className={styles.container}>
              <div className={styles.header}>
                <Image
                  src="/logo.png"
                  alt="Logo da Glambeleza"
                  width={75}
                  height={75}
                  priority
                />

                <p
                  style={{
                    color: "#ca4646",
                    fontWeight: 900,
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    localStorage.clear();
                    window.location.href = "/";
                  }}
                >
                  Sair
                </p>
              </div>
              <div className={styles.contSidebar}>
                <div className={styles.sidebar}>
                  <ul>
                    <li>Posts</li>
                  </ul>
                </div>
                <div className={styles.content}>{children}</div>
              </div>
            </div>
          </div>
        </AuthProvider>
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
      </>
    )
  );
}
