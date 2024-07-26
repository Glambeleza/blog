"use client"
import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import { PostProps } from "@/src/data/types/post";
import { api } from "@/src/data/api";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export interface Pagination {
  current: number;
  total: number
}

export const AppPagination: React.FC<Pagination> = async ({ current, total }) => {
  const seachParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const handlePagination = async (page: number) => {
    const params = new URLSearchParams(seachParams);

    if (page > 1) {
      params.set("page", page.toString())
    } else {
      params.delete("page")
    }

    replace(`${pathName}?${params.toString()}`, { scroll: false })

  }

  return (
    <div >
      <Pagination total={total} pageSize={8} current={current} onChange={(pagination) => handlePagination(pagination)} />
    </div>
  );
}
