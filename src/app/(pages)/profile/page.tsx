"use client";
import react, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { UserAuth } from "@/app/context/AuthContext.js";
import Spinner from "@/app/components/Spinner";
import MultiStepForm from "@/app/components/MultiStepForm";
import AddPostForm from "@/app/components/addPostForm";
import Post from "@/app/components/Post";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/app/firebase";


const profile = () => {
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userLocation, setUserLocation] = useState({
    latitude: 0,
    longitude: 0,
  });


  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    // if(!user) {
    //     router.push('/');
    // }

    const checkAuthentication = async () => {
      //   await new Promise((resolve) => setTimeout(resolve, 500));
      setLoading(false);
    };
    if (user !== null) {
      checkAuthentication();
    }

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Get the user's latitude and longitude
          const { latitude, longitude } = position.coords;

          // Store the location in the state variable
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          // Handle any errors that occur during location retrieval
          console.error("Error getting location:", error);
        }
      );
    } else {
      // Geolocation is not supported by the browser
      console.error("Geolocation is not supported");
    }
  
    // checkAuthentication();
  }, [user]);


  const handleOutsideClick = (e: React.MouseEvent) => {
    if (isModalOpen && e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div  className="max-w-full sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 shadow-xl text-gray-900 bg-gray-700">

<div className="mx-auto w-48 h-48 relative -mt-16 border-4 border-gray-700 shadow-md rounded-full overflow-hidden bg-gray-700 ring-2 ring-blue-700 ring-opacity-100">
  <img
    className="object-cover object-center h-48 w-48 mix-blend"
    src={user?.photoURL}
    alt="User profile"
  />
</div>
    <div className="text-center mt-2">
    <h2 className="text-white font-semibold" style={{ fontSize: '1.5em' }}>{user?.displayName}</h2>
      <p className="text-gray-400 text-black">User</p>
    </div>

      <div className="p-4 border-t mx-8 mt-2 z-1000 shadow-lg">
      <button
  className="w-1/4 block mx-auto rounded-full bg-gray-900 font-semibold text-white px-4 py-1 shadow-lg ring-2 ring-gray-400 ring-opacity-100 transform transition-transform duration-100 hover:scale-105"
  onClick={openModal}
>
  Create Post
</button>

        {isModalOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={handleOutsideClick}
          >
            <div className="bg-white p-8 rounded-md">
              <AddPostForm />
            </div>
          </div>
        )}
      </div>
      <Post />
    </div>
    
  );
};

export default profile;
