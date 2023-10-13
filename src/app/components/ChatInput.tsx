import React from 'react';

const ChatInput = () => {
    return (
<div className="bottom-0 left-0 w-full bg-white p-4 flex items-center">
    <input
        type="text"
        placeholder="Enter your message..."
        className="w-full border border-gray-300 p-2 mr-2 rounded focus:outline-none focus:border-blue-500"
    />
<div className="flex items-center">
    {/* Add Image Icon */}
    <label htmlFor="file" className="cursor-pointer">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-500 hover:text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
        </svg>
    </label>

    {/* Input for Image */}
    <input type="file" style={{ display: "none" }} id="file" />

    {/* Paperclip Icon */}
    <label htmlFor="file" className="ml-3 cursor-pointer">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-500 hover:text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
        </svg>
    </label>
</div>

    <div className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded cursor-pointer">
        Send
    </div>
</div>

    );
};

export default ChatInput;
