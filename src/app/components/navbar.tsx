import Link from "next/link";
import { useRouter } from "next/navigation";
import react, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext.js";
import { getAnalytics, logEvent, isSupported } from "firebase/analytics";

const Navbar = () => {
  const { user, googleSignIn, logOut } = UserAuth();
  const [err, setErr] = useState(false);
  const [loading, setLoading] = react.useState(true);
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
      setErr(true);
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
  }, [user]);

  return (
<nav className="relative flex items-center justify-between sm:h-10 md:justify-center py-6 px-4 p-5 bg-gray-700 pt-9 pb-9">
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
    </nav>
  );
};
export default Navbar;
