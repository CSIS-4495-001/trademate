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

  const { user } = UserAuth();
  const { data } = ChatAuth();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [message]);

  // Convert timestamp to Date object
  const timestampDate = new Date((message.date as any).seconds * 1000);

  if (user && message.senderId === user.uid) {
    isMainUser = true;
  } else {
    isMainUser = false;
  }

  return (
    <div
      ref={ref}
      className={`flex ${
        isMainUser ? "justify-end" : "justify-start"
      } items-center mb-4 ml-2 mr-2`}
    >
      {isMainUser && (
        // Timestamp in a new line for the main user
        <p className="text-xs text-gray-400 ml-2 mr-2">
          {timestampDate.toLocaleString()}
        </p>
      )}
      {/* Message Content */}
      <div
        className={`max-w-[70%] p-3 rounded-lg ${
          isMainUser
            ? "bg-gray-800 text-white shadow-lg"
            : "bg-gray-400 text-black shadow-lg"
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
      {!isMainUser && (
        // Timestamp in a new line for the other user
        <p className="text-xs text-gray-500 ml-2 mr-2">
          {timestampDate.toLocaleString()}
        </p>
      )}
    </div>
  );
};

export default ChatMessage;
