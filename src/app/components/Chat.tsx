import React from "react";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import { ChatAuth } from "../context/ChatContext";

const capitalizeFirstLetter = (str: string) => {
  return str.replace(/\b\w/g, (match) => match.toUpperCase());
};

const Chat = () => {
  const { data } = ChatAuth();

  console.log("data Latest => ", data);

  const displayName = data.Nuser?.displayName || "";
  const formattedDisplayName = displayName
    ? capitalizeFirstLetter(displayName)
    : "Chat Window";

  return (
<div
  className="w-596 overflow-hidden flex flex-col bg-gray-200"
  style={{ height: "43rem"}}
>
  <div
    className="p-4 bg-gray-700"
  >
    <span className="font-semibold text-lg text-white">
      {formattedDisplayName}
    </span>
    <hr className="border-t border-white mt-2"/>
  </div>
  <div className="flex-grow overflow-y-auto bg-gray-700">
    <ChatMessages />
  </div>
  <ChatInput />
</div>
  );
};

export default Chat;
