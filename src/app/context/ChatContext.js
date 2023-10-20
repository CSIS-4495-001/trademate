import  {useContext, createContext, useState, useEffect, useReducer} from 'react';
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, setDoc } from "firebase/firestore"; 
import Chat from '../components/Chat';
import { UserAuth } from './AuthContext';


const ChatContext = createContext();

export const ChatContextProvider = ({children}) => {

    const {user} = UserAuth();

    const INITIAL_STATE ={
        chatId:"null",
        Nuser:{}
    }

    const chatReducer = (state, action) =>{
        switch(action.type){
            case "CHANGE_USER":
                return{
                    Nuser:action.payload,
                    chatId: user.uid > action.payload.uid 
                    ? user.uid + action.payload.uid 
                    : action.payload.uid + user.uid,
                };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

    return (
        <ChatContext.Provider value={{data:state, dispatch}}>
        {children}
        </ChatContext.Provider>
    );
};

export const ChatAuth = () => {
    return useContext(ChatContext);
}