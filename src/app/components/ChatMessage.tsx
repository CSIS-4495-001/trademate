import React from "react";

const ChatMessage = () => {
  const isMainUser = false;

  return (
    <div className={`flex ${isMainUser ? 'justify-end' : 'justify-start'} items-center mb-4`}>
      {/* Message Content */}
      <div className={`max-w-[70%] p-3 rounded-lg ${isMainUser ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'} ${isMainUser ? 'float-right' : 'float-left'}`}>
        <p>
          Hello
        </p>
      </div>
      <p className="text-xs text-gray-500 ml-2">Just now</p>
    </div>
  );
};

export default ChatMessage;
