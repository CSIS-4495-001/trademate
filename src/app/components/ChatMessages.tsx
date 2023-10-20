import React, { useEffect } from "react";
import { useState } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import { ChatAuth } from "../context/ChatContext";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../firebase";

interface Message {
  id: string;
  text: string;
  senderId: string;
  date: Date;
  image?: string;
}

const ChatMessages = () => {

  const [messages, setMessages] = useState<Message[]>([]);
  const { data } = ChatAuth();

  useEffect(() => {

    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages as Message[]);
    });

    return () => {
      unSub();
    };

  }, [data.chatId]);

  console.log("messages => ", messages);
  return (
    <div>
      {messages.map((m) => (
        <ChatMessage message={m} key={m.id} />
      ))}
    </div>
  );
};

export default ChatMessages;
