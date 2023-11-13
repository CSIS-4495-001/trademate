"use client";

import React, { use, useEffect, useState } from "react";
import { UserAuth } from "../../context/AuthContext.js";
import { RecenterControl } from "@/app/components/RecenterControl";
import { darkMapStyle } from "./mapStyles";
import { db, storage } from "@/app/firebase";
import { getFirestore } from "firebase/firestore";
import { Post } from "@/app/types/Post";
import { getDistanceFromLatLonInKm } from "@/app/helpers/Geolocation";

import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
  setDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { get } from "http";
import { Router } from "next/router.js";
import { FilterControl } from "@/app/components/FilterControl";
import { set } from "firebase/database";

interface UserData {
  displayName: string;
  email: string;
  text: string;
  uid: string;
}

// Function to calculate distance between two locations

const page = () => {
  const { user } = UserAuth();
  const [userLocation, setUserLocation] = useState({
    lat: 49.273282,
    lng: -123.104274,
  });

  const [postsInKm, setPostsInKm] = useState(1);

  const [Nuser, setUser] = React.useState<UserData | null>(null);

  const [map, setMap] = useState<google.maps.Map | null>(null); // Store the map instance
  const [isUserLocationAvailable, setIsUserLocationAvailable] = useState(false);

  const mapContainerStyle = {
    width: "100%", // Set the width to 100% of the viewport
    height: "93vh", // Set the height to 100% of the viewport height
  };

  let toastId: any;

  const [posts, setPosts] = useState<Post[]>([]);

  const getSelecedUser = async (selectedUid: string) => {
    console.log("selectedUid => ", selectedUid);
    const q = query(collection(db, "users"), where("uid", "==", selectedUid));

    try {
      const querySnapshot = await getDocs(q);
      console.log(querySnapshot);

      if (querySnapshot.empty) {
        setUser(null);
      } else {
        querySnapshot.forEach((doc) => {
          setUser(doc.data() as UserData);
          console.log(doc.id, " DOCC => ", doc.data());
        });
        console.log("Nuser => ", Nuser);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("Nuser => ", Nuser);
    if (Nuser) {
      createChat();
    }
  }, [Nuser]);

  const createChat = async () => {
    console.log(
      "searching for Nuser with username: ",
      Nuser?.displayName.trim()
    );

    if (Nuser) {
      const combineId =
        user.uid > Nuser.uid ? user.uid + Nuser.uid : Nuser.uid + user.uid;

      console.log("combineId => ", combineId);

      const res = await getDoc(doc(db, "chats", combineId));

      const checkUserChat = await getDoc(doc(db, "userChats", user.uid));
      const checkNuserChat = await getDoc(doc(db, "userChats", Nuser.uid));

      if (!res.exists()) {
        await setDoc(doc(db, "chats", combineId), { messages: [] });

        if(!checkUserChat.exists()){
          await setDoc(doc(db, "userChats", user.uid), { 
            [combineId]: {
              userInfo: {
                uid: Nuser.uid,
                displayName: Nuser.displayName,
              },
              date: serverTimestamp(),
            },
          });
        }

        if(!checkNuserChat.exists()){
          await setDoc(doc(db, "userChats", Nuser.uid), { 
            [combineId]: {
              userInfo: {
                uid: user.uid,
                displayName: user.displayName,
              },
              date: serverTimestamp(),
            },
          });
        }

        await updateDoc(doc(db, "userChats", user.uid), {
          [combineId + ".userInfo"]: {
            uid: Nuser.uid,
            displayName: Nuser.displayName,
          },
          [combineId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", Nuser.uid), {
          [combineId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
          },
          [combineId + ".date"]: serverTimestamp(),
        });
        
        toast.success("Connection Created, Go to chat page to talk", {
          position: "bottom-left",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

      } else {
        toast.error("Chat already exists", {
          position: "bottom-left",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
    setUser(null); // Reset the user state after handling the selection
  };

  const handleSelect = async (selectedUid: string) => {
    await getSelecedUser(selectedUid);
  };

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

      let circle = new google.maps.Circle({
        strokeColor: "#00FF00",
        strokeOpacity: 0.3,
        strokeWeight: 2,
        fillColor: "#00FF00",
        fillOpacity: 0.2,
        map: map,
        center: userLocation,
        radius: postsInKm * 1000,
        // Add 3D effect with a drop shadow
        zIndex: 1, // Ensure the circle is above other elements
        // Add a drop shadow for the 3D effect
      });
      // Create a custom control for filtering
      const filterControlDiv = document.createElement("div");

      const setRadius = (radius: number) => {
        // Update the radius of your circle here
        setPostsInKm(radius);
        circle.setRadius(radius * 1000);
        radius = radius;
      };
      const filterControl = new FilterControl(
        filterControlDiv,
        map,
        setRadius,
        postsInKm
      );
      // Set the position for the filter control
      map.controls[google.maps.ControlPosition.TOP_CENTER].push(
        filterControlDiv
      );

      let openInfoWindow: google.maps.InfoWindow | null = null;

      // Add markers based on the 'pins' array
      posts.forEach((pin, index) => {
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
            <div style="max-width: 300px; margin: 0 auto; background-color: #ffffff; padding: 16px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <h2 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 8px;">${
              pin.title
            }</h2>
            <p style="color: #555; margin-bottom: 8px;">Description: ${
              pin.description
            }</p>
            <p style="color: #555; margin-bottom: 8px;">Posted at: ${new Date(
              pin.createdAt
            )}</p>
            <p style="color: #555; margin-bottom: 8px;">Coordinates: ${
              pin.coords.lat
            }, ${pin.coords.lng}</p>
            <p style="color: #555; margin-bottom: 8px;">Location: ${
              pin.location
            }</p>
            <p style="color: #555; margin-bottom: 8px;">Price: ${pin.price}</p>
            
            <div style="display: flex; gap: 8px; overflow: hidden; margin-bottom: 8px;">
              ${pin.images
                .map(
                  (image) =>
                    `<img src="${image}" alt="Post image" style="width: 50px; height: 50px; object-fit: cover; border-radius: 4px;"/>`
                )
                .join("")}
            </div>
          
            <button style="background-color: #3498db; color: #fff; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer;" id="selectButton${index}" value="${pin.user}">Select</button>
          </div>
            `,
          });

          google.maps.event.addListenerOnce(infowindow, "domready", () => {
            const selectButton = document.getElementById(
              `selectButton${index}`
            );
            if (selectButton) {
              selectButton.addEventListener("click", () => {
                console.log("selectButton clicked");
                const selectedUid = selectButton?.getAttribute("value");
                console.log("selectedUid => ", selectedUid);
                handleSelect(selectedUid!);
                infowindow.close(); // Optionally close the InfoWindow after button click
              });
            }
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
            if(data.user != user.uid){
              nearbyPosts.push(data as Post);
            }
          }
        });

        setPosts(nearbyPosts);
        console.log("nearbyPosts => ", nearbyPosts);
      };

      fetchData();
    }
  }, [userLocation, postsInKm]);

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
