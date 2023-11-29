"use client";

import react, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { UserAuth } from "../../../context/AuthContext.js";
import ReportedPosts from "@/app/components/Posts/ReportedPosts";

const Moderate = () => {
  const { user } = UserAuth();
  const router = useRouter();

  return (
    <div className="flex flex-1 items-center justify-center p-6">
      <div className="w-full">
        <div className="p-4">
          <ReportedPosts />
        </div>
      </div>
    </div>
  );
};

export default Moderate;
