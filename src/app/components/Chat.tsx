import React from 'react';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import { ChatAuth } from '../context/ChatContext';

const Chat = () => {

    const {data} = ChatAuth();

    console.log("data Latest => ",data);

    return (
<div className="w-596 h-96 border rounded-lg overflow-hidden flex flex-col">
    <div className="p-4 border-b">
        <span className="font-semibold text-lg">{data.Nuser?.displayName}</span>
    </div>
    <div className="flex-grow overflow-y-auto">
        <ChatMessages />
    </div>
    <ChatInput />
</div>



    );
};

export default Chat;
