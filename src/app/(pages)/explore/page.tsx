"use client";

import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";
import { UserAuth } from "../../context/AuthContext.js";
import { RecenterControl } from "@/app/components/RecenterControl";
import { darkMapStyle } from "./mapStyles";
import { db, storage } from "@/app/firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { Post } from "@/app/types/Post";
import { getDistanceFromLatLonInKm } from "@/app/helpers/Geolocation";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const postsInKm = 10;

// Function to calculate distance between two locations

const page = () => {
  const { user } = UserAuth();
  const [userLocation, setUserLocation] = useState({
    lat: 49.273282,
    lng: -123.104274,
  });
  // const router = useRouter();

  const [map, setMap] = useState<google.maps.Map | null>(null); // Store the map instance
  const [isUserLocationAvailable, setIsUserLocationAvailable] = useState(false);

  const mapContainerStyle = {
    width: "100%", // Set the width to 100% of the viewport
    height: "93vh", // Set the height to 100% of the viewport height
  };

  let toastId: any;

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const mapElement = document.getElementById("map");

    let map: google.maps.Map;
    if (mapElement) {
      let defaultSettings = {
        zoom: isUserLocationAvailable ? 15 : 12,
        center: userLocation,
        styles: darkMapStyle,
        minZoom: 2,
        gestureHandling: "cooperative",
        mapTypeControl: false,
        disableDefaultUI: true,
        streetViewControl: true,
      };

      map = new google.maps.Map(mapElement, defaultSettings);

      if (isUserLocationAvailable) {
        // Create a circle overlay with a 1000-meter radius
        const circle = new google.maps.Circle({
          strokeColor: "#00a7bd",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          // fillColor: "#FF0000",
          fillOpacity: 0,
          map: map,
          center: userLocation,
          radius: postsInKm * 1000,
        });

        const blueDotIcon = {
          path: google.maps.SymbolPath.CIRCLE,
          fillColor: "#269bf3",
          fillOpacity: 1,
          scale: 6, // Adjust the size as needed
          strokeColor: "white",
          strokeWeight: 1,
        };

        const userMarker = new google.maps.Marker({
          position: userLocation,
          icon: blueDotIcon,
          map: map,
        });
      }

      // Create a custom control for recentering
      const recenterControlDiv = document.createElement("div");
      const recenterControl = new RecenterControl(
        recenterControlDiv,
        map,
        userLocation
      );

      // Set the position for the recenter control above the Street View control
      map.controls[google.maps.ControlPosition.TOP_CENTER].push(
        recenterControlDiv
      );

      let openInfoWindow: google.maps.InfoWindow | null = null;

      // Add markers based on the 'pins' array
      posts.forEach((pin) => {
        const marker = new google.maps.Marker({
          position: { lat: pin.coords.lat, lng: pin.coords.lng },
          map: map,
        });

        marker.addListener("click", () => {
          // Close the currently open InfoWindow if it exists
          if (openInfoWindow) {
            openInfoWindow.close();
          }

          const infowindow = new google.maps.InfoWindow({
            content: `
              <div class="max-w-xs bg-white p-4 rounded shadow-lg">
                <h2 class="text-xl font-bold mb-2">${pin.title}</h2>
                <p class="text-gray-600">Description: ${pin.description}</p>
                <p class="text-gray-600">Posted at: ${new Date(
                  pin.createdAt
                )}</p>
                <p class="text-gray-600">Coordinates: ${pin.coords.lat}, ${
              pin.coords.lng
            }</p>
                <p class="text-gray-600">Location: ${pin.location}</p>
                <p class="text-gray-600">Price: ${pin.price}</p>
                <div class="overflow-hidden">
                  <div class="flex" style="width: ${
                    pin.images.length * 100
                  }px;">
                    ${pin.images
                      .map(
                        (image) =>
                          `<img src="${image}" alt="Post image" class="w-16 h-16 object-cover mr-2"/>`
                      )
                      .join("")}
                  </div>
                </div>
              </div>
            `,
          });

          infowindow.open(map, marker);

          // Set the new InfoWindow as the currently open one
          openInfoWindow = infowindow;
        });
      });
    }
  }, [userLocation, isUserLocationAvailable, posts]);

  useEffect(() => {
    if ("geolocation" in navigator) {
      if (!isUserLocationAvailable && toastId == undefined) {
        toastId = toast("Fetching user location...", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Get the user's latitude and longitude
          const { latitude, longitude } = position.coords;

          // Store the location in the state variable
          setUserLocation({ lat: latitude, lng: longitude });

          if (!isUserLocationAvailable) {
            toast.dismiss(toastId);
          }

          setIsUserLocationAvailable(true);
        },
        (error) => {
          // Handle any errors that occur during location retrieval
          console.error("Error getting location:", error);
        }
      );
    } else {
      setIsUserLocationAvailable(false);
      // Geolocation is not supported by the browser
      console.error("Geolocation is not supported");
    }

    return () => {
      setIsUserLocationAvailable(false);
    };
  }, []);

  useEffect(() => {
    if (isUserLocationAvailable) {
      const fetchData = async () => {
        const db = getFirestore();
        const postsRef = collection(db, "posts"); // replace 'posts' with your collection name
        const querySnapshot = await getDocs(postsRef);
        const nearbyPosts: Post[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const distanceInKm = getDistanceFromLatLonInKm(
            userLocation.lat,
            userLocation.lng,
            data.coords.lat,
            data.coords.lng
          );
          if (distanceInKm <= postsInKm) {
            nearbyPosts.push(data as Post);
          }
        });

        setPosts(nearbyPosts);
      };

      fetchData();
    }
  }, [userLocation]);

  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="w-full">
        <ToastContainer />
        <div className="">
          <div id="map" style={mapContainerStyle}></div>
        </div>
      </div>
    </div>
  );
};

export default page;
