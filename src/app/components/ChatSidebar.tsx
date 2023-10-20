import React from 'react';
import ChatNavbar from './ChatNavbar';
import Chats from './Chats';
import ChatSearch from './ChatSearch';

const ChatSidebar: React.FC = () => {
    return (
        <div>
            <ChatNavbar></ChatNavbar>
            <ChatSearch></ChatSearch>
            <Chats></Chats>
        </div>
    );
};

export default ChatSidebar;
