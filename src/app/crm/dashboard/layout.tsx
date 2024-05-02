"use client";
import { Button } from "@/components/ui/button";
import styles from "./layout.module.css";
import { AuthProvider } from "@/src/context/AutheContext";
import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
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

            <div>User</div>
          </div>
          <div className={styles.contSidebar}>
            <div className={styles.sidebar}>
              <ul>
                <li>Posts</li>
                <li>Usuários</li>
              </ul>
            </div>
            <div className={styles.content}>{children}</div>
          </div>
        </div>
      </div>
    </AuthProvider>
  );
}
