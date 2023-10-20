"use client";

import react, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { UserAuth } from "../../../context/AuthContext.js";

const dashboard = () => {
  const { user } = UserAuth();
  const router = useRouter();

  return (
    <div className="flex flex-1 items-center justify-center p-6">
      <div className="w-full max-w-lg">
        <div className="p-4">
          <h1>dashboard page</h1>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
