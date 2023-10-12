"use client";
import react, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { UserAuth } from "../../context/AuthContext.js";
import Spinner from "../../components/Spinner";
import MultiStepForm from "../../components/MultiStepForm";


const profile = () => {
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userLocation, setUserLocation] = useState({ latitude: 0, longitude: 0 });


  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  useEffect(() => {
    if(!user) {
        router.push('/');
    }

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

  return (
    <div className="max-w-full sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
      <div className="rounded-t-lg h-32 overflow-hidden">
        <img
          className="object-cover object-top w-full"
          src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          alt="Mountain"
        />
      </div>
      <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img
          className="object-cover object-center h-32"
          src={user?.photoURL}
          alt="Woman looking front"
        />
      </div>
      <div className="text-center mt-2">
        <h2 className="font-semibold">{user?.displayName}</h2>
        <p className="text-gray-500">User</p>
      </div>
      <ul className="py-2 mt-1 text-gray-700 flex items-center justify-center space-x-4">
  <li className="flex flex-col items-center justify-around">
    <svg
      className="w-4 fill-current text-blue-900"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
    </svg>
    <div>2k</div>
  </li>
  <li className="flex flex-col items-center justify-around">
    <svg
      className="w-4 fill-current text-blue-900"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
    </svg>
    <div>15</div>
  </li>
</ul>

      <div className="p-4 border-t mx-8 mt-2">
        <button className="w-1/4 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-4 py-1"
        onClick={openModal}>
          Create Post
        </button>
        {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-md">
            <MultiStepForm onClose={closeModal} />
          </div>
        </div>
      )}      
      <div>
            {userLocation ? (
            <div>
                Latitude: {userLocation.latitude}, Longitude: {userLocation.longitude}
            </div>
            ) : (
            <div>Loading location...</div>
            )}
            {/* The rest of your component */}
        </div>
      </div>
    </div>
  );
};

export default profile;
