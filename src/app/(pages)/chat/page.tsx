"use client";

import react, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { UserAuth } from "../../context/AuthContext.js";

const page = () => {
  const { user } = UserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  });

  return (
    <div className="p-4">
      <h1>Chat page</h1>
    </div>
  );
};

export default page;
