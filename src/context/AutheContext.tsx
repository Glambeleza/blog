import { createContext, ReactNode, useState } from "react";
import { api } from "../data/api";
import { setCookie } from "nookies";
import Router from "next/router";

type SingnInData = {
  name: string;
  password: string;
};

type User = {
  id: string;
  active: boolean;
  avatar: string;
  name: string;
  role: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  signIn: (data: SingnInData) => Promise<void>;
};

type Response = {
  token: string;
  user: User;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  async function signIn({ name, password }: SingnInData) {
    const response = await api("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
      body: JSON.stringify({ name, password }),
    });

    const json = (await response.json()) as Response;
    const token = json?.token;
    const user = json?.user;

    setCookie(undefined, "@GlambelezaToken", token, {
      maxAge: 60 * 60 * 1,
    });

    setUser(user);

    Router.push("/crm/dashboard/post");
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
