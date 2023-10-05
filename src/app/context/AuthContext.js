import  {useContext, createContext, useState, useEffect} from 'react';
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, setDoc } from "firebase/firestore"; 


const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    
    const [user, setUser] = useState(null);

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
    }

    // Logout
    const logOut = () => {
        signOut(auth);
    }

    useEffect(() => {
        const stateChange = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        return stateChange;
    }, [user]);

    // Function to save user details to the database.
    const saveUserDetails = async (user) => {

        console.log({user});

        // Create an object containing the user details you want to save.
        const userDetails = {
            displayName: user.displayName,
            email: user.email,
            text: "yoho"
            // Add other user details as needed.
        };

        try {
            await setDoc(doc(db, "users", user.uid), userDetails);
            console.log("Document written successfully.");
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    return (
        <AuthContext.Provider value={{user, googleSignIn, logOut}}>
        {children}
        </AuthContext.Provider>
    );
}


export const UserAuth = () => {
    return useContext(AuthContext);
}