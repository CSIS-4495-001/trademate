import React, { useEffect, useRef } from "react";
import { UserAuth } from "../context/AuthContext";
import { ChatAuth } from "../context/ChatContext";

interface ChatMessageProps {
  message: {
    id: string;
    text: string;
    senderId: string;
    date: Date;
    image?: string;
  };
}


const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  let isMainUser = false;

  const {user} = UserAuth();
  const {data} = ChatAuth();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [message]);

  if (user && message.senderId === user.uid) {
    isMainUser = true;
  }else{
    isMainUser = false;
  }
  return (
    <div
      ref={ref}
      className={`flex ${
        isMainUser ? "justify-end" : "justify-start"
      } items-center mb-4 ml-2 mr-2`}
    >
      {/* Message Content */}
      <div
        className={`max-w-[70%] p-3 rounded-lg ${
          isMainUser
            ? "bg-blue-500 text-white shadow-md"
            : "bg-gray-100 text-gray-800 shadow-md"
        } ${isMainUser ? "float-right" : "float-left"}`}
      >
        <p>{message.text}</p>
        {message.image && (
          <img
            src={message?.image}
            alt=""
            className="mt-2 rounded-md w-full h-auto"
          />
        )}
      </div>
      <p className="text-xs text-gray-500 ml-2"></p>
    </div>
  );
};

export default ChatMessage;
