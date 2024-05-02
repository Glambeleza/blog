"use client";
import { api } from "@/src/data/api";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

export const DeactivatePost: React.FC<{ id: string }> = ({ id }) => {
  const token = window.localStorage.getItem("@GlambelezaToken");

  async function deactivatePost(id: string) {
    const data = {
      id,
    };

    const response = await api("/post", {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token?.trim()}`,
        "Content-Type": "application/json",
      },
      cache: "no-cache",
      body: JSON.stringify(data),
      credentials: "include",
    });

    const json = await response.json();
  }

  return (
    <div onClick={() => deactivatePost(id)}>
      <AiOutlineDelete />
    </div>
  );
};

export default DeactivatePost;
