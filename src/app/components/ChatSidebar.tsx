import React from 'react';
import ChatNavbar from './ChatNavbar';
import Chats from './Chats';

const ChatSidebar: React.FC = () => {
    return (
        <div>
            <h1>SideBar</h1>
            <ChatNavbar></ChatNavbar>
            <Chats></Chats>
        </div>
    );
};

export default ChatSidebar;
