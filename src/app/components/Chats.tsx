import React, { useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from "../context/AuthContext";
import Chat from "./Chat";
import { ChatAuth} from "../context/ChatContext";

interface ChatDetails {
  value: {
    [key: string]: {
      date: {
        timestampValue: string;
      };
      lasstMessage: string;
      userInfo: {
        displayName: {
          stringValue: string;
        };
        uid: {
          stringValue: string;
        };
      };
    };
  };
}

interface UserData {
  displayName: string;
  uid: string;
}
const Chats = () => {
  const [chats, setChats] = React.useState({} as ChatDetails);
  const { user } = UserAuth();
  const {dispatch} = ChatAuth();

  useEffect(() => {
    console.log("user => ", user);

    if (user) {
      const getChats = () => {
        const userChatsRef = doc(db, "userChats", user.uid); // Create DocumentReference for the user
        const unsub = onSnapshot(userChatsRef, (doc) => {
          setChats(doc.data() as ChatDetails);
          console.log("chats => ", doc.data());
        });

        return () => {
          unsub();
        };
      };

      getChats();
    }
  }, [user]);

  const handleSelect = async (data: UserData) => {
    console.log("handleSelect => ", data);
    dispatch({type:"CHANGE_USER",payload:data});
  }

  // console.log("chatss ",Object.entries(chats));

  return (
<>
  {chats
    ? Object.entries(chats).map(([key, chat]: [string, any]) => (
        <div key={key} className="flex items-center p-3 hover:bg-gray-200 cursor-pointer" onClick={() => handleSelect(chat.userInfo)}>
          <div className="flex items-center justify-center mt-4 hover:bg-gray-200 cursor-pointer">
            <div className="bg-blue-500 text-white rounded-full h-12 w-12 flex items-center justify-center text-lg font-bold">
              <span>{chat.userInfo.displayName[0].toUpperCase()}</span>
              {chat.userInfo.displayName.includes(" ") && (
                <span>{chat.userInfo.displayName.split(" ")[1][0].toUpperCase()}</span>
              )}
            </div>
            <div className="ml-2">
              <div>{chat.userInfo.displayName}</div>
              <div className="text-sm text-gray-500">{chat.lastMessage?.text}</div>
            </div>
          </div>
        </div>
      ))
    : null
  }
</>


  );
};

export default Chats;
