import React from "react";

const Chats = () => {
  return (
    <div className="flex items-center p-3 hover:bg-gray-200 cursor-pointer">
      <img
        src="#"
        alt="Profile Image"
        className="w-10 h-10 rounded-full mr-3"
      />
      <div>
        <span className="font-semibold text-gray-800">Jane</span>
        <p className="text-gray-600">Hello</p>
      </div>
    </div>
  );
};

export default Chats;
