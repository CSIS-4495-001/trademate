"use client";

import react, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { UserAuth } from "../../context/AuthContext.js";
import ChatSidebar from "../../components/ChatSidebar";
import Chat from "../../components/Chat";

const page = () => {
  const { user } = UserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  });

  return (
    <div className="flex p-4">
      <div className="w-1/4 pr-4">
        {/* Sidebar */}
        <ChatSidebar />
      </div>
      <div className="w-3/4">
        {/* Main Chat Window */}
        <div
          className="bg-white p-4 rounded-lg shadow"
          style={{ height: "718px" }}
        >
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default page;
