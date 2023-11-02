import React, { useEffect } from "react";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from "../context/AuthContext";
import Chat from "./Chat";
import { ChatAuth} from "../context/ChatContext";
import { set } from "firebase/database";

interface ChatDetails {
  value: {
    [key: string]: {
      date: {
        timestampValue: string;
      };
      lastMessage: {
        text: string;
      };
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
  const { dispatch } = ChatAuth();

  useEffect(() => {
    console.log("user => ", user);
    if (user) {
      const getChats = () => {
        const userChatsRef = doc(db, "userChats", user.uid);

        // Clear local data
        setChats({} as ChatDetails);

        // Check if the document exists before creating it
        getDoc(userChatsRef)
          .then((docSnapshot) => {
            if (docSnapshot.exists()) {
              // Document already exists, update local data
              console.log("Document already exists:", docSnapshot.data());
              setChats(docSnapshot.data() as ChatDetails);
            }

            // Create a listener for further changes
            const unsub = onSnapshot(userChatsRef, (doc) => {
              setChats(doc.data() as ChatDetails);
              console.log("chats => ", doc.data());
            });

            return () => {
              unsub();
            };
          })
          .catch((error) => {
            console.error("Error checking document:", error);
          });
      };
      getChats();
    }
  }, [user]);

  const capitalizeFirstLetter = (str: string) => {
    return str.replace(/\b\w/g, match => match.toUpperCase());
  };

  const handleSelect = async (data: UserData) => {
    console.log("handleSelect => ", data);
    dispatch({ type: "CHANGE_USER", payload: data });
  };

  return (
    <>
      {chats
        ? Object.entries(chats).map(([key, chat]: [string, any]) => (
            <div
              key={key}
              className="flex items-center p-3 hover:bg-gray-200 cursor-pointer shadow-md"
              onClick={() => handleSelect(chat.userInfo)}
            >
              <div className="flex items-center justify-center mt-4 hover:bg-gray-200 cursor-pointer">
                <div className="bg-blue-500 text-white rounded-full h-12 w-12 flex items-center justify-center text-lg font-bold">
                  <span>{chat.userInfo.displayName[0].toUpperCase()}</span>
                  {chat.userInfo.displayName.includes(" ") && (
                    <span>
                      {chat.userInfo.displayName.split(" ")[1][0].toUpperCase()}
                    </span>
                  )}
                </div>
                <div className="ml-2">
                  <div>{capitalizeFirstLetter(chat.userInfo.displayName)}</div>
                  <div className="text-sm text-gray-500">
                    {chat.lastMessage?.text}
                  </div>
                </div>
              </div>
            </div>
          ))
        : null}
    </>
  );
};

export default Chats;
