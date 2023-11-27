import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  getAuth,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { ChatContextProvider } from "./ChatContext";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleSendEmailLink = async (email) => {
    const auth = getAuth();
    const actionCodeSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be in the authorized domains list in the Firebase Console.
      url: window.location.origin,
      // This must be true.
      handleCodeInApp: true,
    };

    try {
      console.log("dropping mail", actionCodeSettings);
      sendSignInLinkToEmail(auth, email, actionCodeSettings)
        .then(() => {
          // The link was successfully sent. Inform the user.
          // Save the email locally so you don't need to ask the user for it again
          // if they open the link on the same device.
          window.localStorage.setItem("emailForSignIn", email);
          console.log("Email link sent. Check your email to sign in.");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ...
          console.error("Error sending email link:", error);
        });
    } catch (error) {
      // Handle the error (e.g., display an error message)
      console.error("Error sending email link - :", error);
    }
  };

  // Login with Google
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // After successful login, you can access user information from the result object
        saveUserDetails(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Logout
  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const stateChange = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return stateChange;
  }, [user]);

  const saveUserDetails = async (user) => {
    console.log({ user });

    if (!user.displayName) {
      user.displayName = user.email.split("@")[0];
    }

    // Create an object containing the user details you want to save.
    const userDetails = {
      displayName: user.displayName.toLowerCase(),
      email: user.email,
      text: "yoho",
      uid: user.uid,
      // Add other user details as needed.
    };

    const userDocRef = doc(db, "users", user.uid);
    const userChatsDocRef = doc(db, "userChats", user.uid);

    try {
      // Check if the document already exists in the "users" collection
      const userDocSnapshot = await getDoc(userDocRef);

      if (!userDocSnapshot.exists()) {
        // Document doesn't exist, create it
        await setDoc(userDocRef, userDetails);
        console.log("User document written successfully.");
      } else {
        console.log("User document already exists. Skipping creation.");
      }

      // Check if the document already exists in the "userChats" collection
      const userChatsDocSnapshot = await getDoc(userChatsDocRef);

      if (!userChatsDocSnapshot.exists()) {
        // Document doesn't exist, create it
        await setDoc(userChatsDocRef, {});
        console.log("UserChats document written successfully.");
      } else {
        console.log("UserChats document already exists. Skipping creation.");
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        googleSignIn,
        logOut,
        handleSendEmailLink,
        saveUserDetails,
      }}
    >
      <ChatContextProvider>{children}</ChatContextProvider>
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
