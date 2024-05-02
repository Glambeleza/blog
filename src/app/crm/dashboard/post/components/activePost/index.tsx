"use client";
import { api } from "@/src/data/api";
import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

export const ActivPost: React.FC<{ id: string }> = ({ id }) => {
  const token = localStorage.getItem("@GlambelezaToken");

  async function activatePost(id: string) {
    const data = {
      id,
    };

    const response = await api("/post/activate", {
      method: "POST",
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
    <div onClick={() => activatePost(id)}>
      <AiOutlineCloudUpload />
    </div>
  );
};

export default ActivPost;
