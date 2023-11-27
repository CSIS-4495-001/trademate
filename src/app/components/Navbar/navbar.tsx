import Link from "next/link";
import { useRouter } from "next/navigation";
import react, { useEffect, useState } from "react";
import { UserAuth } from "../../context/AuthContext.js";
import Modal from "react-modal";
import styles from "@/app/components/Navbar/navbar.module.css";
import {
  getAuth,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";

const Navbar = () => {
  const { user, googleSignIn, logOut, handleSendEmailLink, saveUserDetails } =
    UserAuth();
  const [err, setErr] = useState(false);
  const [loading, setLoading] = react.useState(true);
  const [emailModalIsOpen, setEmailModalIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
      setErr(true);
    }
  };

  const handleEmailVerification = () => {
    const auth = getAuth();
    const isSignIn = isSignInWithEmailLink(auth, window.location.href);

    if (isSignIn) {
      const email = window.localStorage.getItem("emailForSignIn"); // Retrieve the email
      if (email) {
        signInWithEmailLink(auth, email, window.location.href)
          .then((result) => {
            // User is signed in
            console.log("Successfully signed in:", result.user);
            window.localStorage.removeItem("emailForSignIn");
            saveUserDetails(result.user);
            // Redirect or update UI as needed (e.g., navigate to a logged-in page)
          })
          .catch((error) => {
            // Handle sign-in errors
            console.error("Error signing in:", error);
            // Redirect or update UI accordingly
          });
      } else {
        // Handle missing email address
        console.error("Email address not found.");
        // Redirect or update UI accordingly
      }
    }
  };

  const openEmailLogin = async () => {
    setEmailModalIsOpen(true);
  };

  const handleEmailLogin = async () => {
    if (email.trim() !== "") {
      try {
        console.log({ email, handleSendEmailLink });

        await handleSendEmailLink(email);
        // Close the modal or perform other actions after sending the link
        setEmailModalIsOpen(false);
      } catch (error) {
        console.error("Error sending email link:", error);
        // Handle the error (e.g., display an error message)
      }
    } else {
      // Handle invalid or empty email address
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
      console.log("Logged out, redirecting to home");
      router.push("/"); // Redirect to home
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setLoading(false);
    };

    checkAuthentication();
    handleEmailVerification();
  }, [user]);

  Modal.setAppElement("#app-root");

  return (
    <nav className="relative flex items-center justify-between sm:h-10 md:justify-center py-6 px-4 p-5 bg-gray-700 pt-9 pb-9 pr-9">
      <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              id="main-menu"
              aria-label="Main menu"
              aria-haspopup="true"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            >
              <svg
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {!user ? (
        <div></div>
      ) : (
        <div className="hidden md:flex md:space-x-10">
          <Link
            href="/explore"
            className="font-medium text-white hover:text-gray-900 transition duration-150 ease-in-out"
          >
            Explore
          </Link>
          <Link
            href="/profile"
            className="font-medium text-white hover:text-gray-900 transition duration-150 ease-in-out"
          >
            Profile
          </Link>
          <Link
            href="/chat"
            className="font-medium text-white hover:text-gray-900 transition duration-150 ease-in-out"
          >
            Chat
          </Link>
        </div>
      )}

      <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
        {loading ? null : !user ? (
          <ul className="flex">
            <li
              onClick={handleSignIn}
              className="p-2 cursor-pointer hover:underline"
            >
              <div className="px-6 sm:px-0 max-w-sm">
                <button
                  type="button"
                  className="text-white w-full bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                >
                  <svg
                    className="mr-2 -ml-1 w-4 h-4"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="google"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 488 512"
                  >
                    <path
                      fill="currentColor"
                      d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                    ></path>
                  </svg>
                  Login with Google<div></div>
                </button>
              </div>
            </li>

            <li className="p-2 cursor-pointer hover:underline">
              <div className="px-6 sm:px-0 max-w-sm">
                <button
                  type="button"
                  className="text-white w-full bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-gray-700 mr-2 mb-2"
                  onClick={openEmailLogin} // Assuming handleEmailLogin function exists for email login
                >
                  Login with Email
                </button>
              </div>
            </li>

            {err ? <p className="text-red-500">Error signing in</p> : null}
          </ul>
        ) : (
          <div className="flex items-center pr-2">
            {/* <p className="mr-4">Welcome, <br/>{user.displayName}</p> */}
            <button
              onClick={handleSignOut}
              className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-red-600"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>

      <Modal
        isOpen={emailModalIsOpen}
        onRequestClose={() => setEmailModalIsOpen(false)}
        contentLabel="Enter Email Modal"
        className={styles.modal}
        shouldCloseOnOverlayClick={true}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(19, 19, 19, 0.75)",
          },
        }}
      >
        <div className={styles.emailModal}>
          <h2 className="text-lg font-semibold mb-4">Enter Your Email</h2>
          <input
            type="email"
            placeholder="Please enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-md py-2 px-3 mb-4 w-full"
          />
          <button
            onClick={handleEmailLogin}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Send Email Link
          </button>
        </div>
      </Modal>
    </nav>
  );
};
export default Navbar;
