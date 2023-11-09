import React, { useState } from "react";
import { ChatAuth } from "../context/ChatContext";
import { UserAuth } from "../context/AuthContext";
import {
  arrayUnion,
  updateDoc,
  doc,
  Timestamp,
  serverTimestamp,
} from "firebase/firestore";
import { db, storage } from "../firebase";
const { v4: uuidv4 } = require("uuid");

// Generate a random UUID
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const ChatInput = () => {
  const myUUID = uuidv4();
  const [text, setText] = useState(" ");
  const [image, setImage] = useState<File | null>(null);
  const [showImageModal, setShowImageModal] = useState(false);

  const { user } = UserAuth();
  const { data } = ChatAuth();

    const handleSend = async () => {

        if(image){

            let filename = "chats/"+myUUID;

            const storageRef = ref(storage,filename);

            const uploadTask = uploadBytesResumable(storageRef,image);
        
            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    // handle state changes if needed
                },
                (error) => {
                    console.error(error);
                },
                () => {
                    // handle successful completion if needed
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateDoc(doc(db, "chats", data.chatId), {
                            messages: arrayUnion({
                                id: myUUID,
                                text,
                                senderId: user.uid,
                                date: Timestamp.now(),
                                image: downloadURL,
                            }),
                        });
                    });
                }
            );

        }else{
         await updateDoc(doc(db,"chats",data.chatId),{
        messages: arrayUnion({
          id: myUUID,
          text,
          senderId: user.uid,
          date: Timestamp.now(),
        }),
      });

    }

    await updateDoc(doc(db, "userChats", user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.Nuser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
    setImage(null);
    setShowImageModal(false);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files?.[0] || null;
    setImage(selectedImage);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const handleCancel = () => {
    setImage(null);
    setShowImageModal(false);
  };

  return (
    <div className="bottom-0 left-0 w-full bg-gray-700 flex items-center ">
      <input
        type="text"
        placeholder="Enter your message..."
        className="w-full border border-gray-800 p-4 mr-2 rounded focus:outline-none focus:border-gray-500 text-white bg-gray-800"
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        value={text}
      />
      <div className="flex items-center">
        {/* Add Image Icon */}
        <label htmlFor="file" className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800 hover:text-gray-400"
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
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          onChange={(e) => {
            handleImageChange(e);
            setShowImageModal(true);
          }}
        />
      </div>

      {image && (
        <div className="mr-2">
          <button
            className="text-blue-500 underline cursor-pointer"
            onClick={() => setShowImageModal(true)}
          >
          </button>
        </div>
      )}

      {/* Modal */}
      
      {showImageModal && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-gray-800 p-4 rounded text-white">
      <p className="justify-center">Image Selected</p>
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2"
        onClick={handleSend}
      >
        Send
      </button>
      <button
        className="bg-gray-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleCancel}
      >
        Cancel
      </button>
    </div>
  </div>
)}

<div
  className="bg-gray-800 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded cursor-pointer"
  onClick={handleSend}
>
  Send
</div>
</div>
  );
};

export default ChatInput;
