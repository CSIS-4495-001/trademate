"use client";

import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";
import { UserAuth } from "../../context/AuthContext.js";
import firebase from "firebase/app";
import "firebase/database";

const page = () => {
  const { user } = UserAuth();
  const [userLocation, setUserLocation] = useState({
    lat: 0,
    lng: 0,
  });
  // const router = useRouter();

  const [map, setMap] = useState<google.maps.Map | null>(null); // Store the map instance
  const [isUserLocationAvailable, setIsUserLocationAvailable] = useState(false);

  // https://mapstyle.withgoogle.com/
  const darkMapStyle = [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#1d2c4d",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#8ec3b9",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1a3646",
        },
      ],
    },
    {
      featureType: "administrative.country",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#4b6878",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#64779e",
        },
      ],
    },
    {
      featureType: "administrative.province",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#4b6878",
        },
      ],
    },
    {
      featureType: "landscape.man_made",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#334e87",
        },
      ],
    },
    {
      featureType: "landscape.natural",
      elementType: "geometry",
      stylers: [
        {
          color: "#023e58",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#283d6a",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#6f9ba5",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1d2c4d",
        },
      ],
    },
    {
      featureType: "poi.business",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#023e58",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#3C7680",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#304a7d",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#98a5be",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1d2c4d",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#2c6675",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#255763",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#b0d5ce",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#023e58",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#98a5be",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1d2c4d",
        },
      ],
    },
    {
      featureType: "transit.line",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#283d6a",
        },
      ],
    },
    {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [
        {
          color: "#3a4762",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#0e1626",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#4e6d70",
        },
      ],
    },
  ];

  const pins = [
    { latitude: 37.7749, longitude: -122.4194 }, // Example pin 1
    { latitude: 34.0522, longitude: -118.2437 }, // Example pin 2
    // Add more hardcoded pins as needed
  ];

  const mapContainerStyle = {
    width: "100%", // Set the width to 100% of the viewport
    height: "93vh", // Set the height to 100% of the viewport height
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
        // const circle = new google.maps.Circle({
        //   strokeColor: "#00a7bd",
        //   strokeOpacity: 0.8,
        //   strokeWeight: 2,
        //   // fillColor: "#FF0000",
        //   fillOpacity: 0.35,
        //   map: map,
        //   center: userLocation,
        //   radius: 1000, // Radius in meters (1000 meters = 1 km)
        // });

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

      class RecenterControl {
        constructor(controlDiv: HTMLDivElement, map: google.maps.Map) {
          // Create the control button
          const controlUI = document.createElement("div");
          controlUI.style.backgroundColor = "#fff";
          controlUI.style.border = "1px solid #ccc";
          controlUI.style.borderRadius = "3px";
          controlUI.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.3)";
          controlUI.style.cursor = "pointer";
          controlUI.style.marginBottom = "10px";
          controlUI.style.textAlign = "center";
          controlUI.title = "Click to recenter the map";
          controlDiv.appendChild(controlUI);

          // Set the button's text and click event
          const controlText = document.createElement("div");
          controlText.style.color = "rgb(25,25,25)";
          controlText.style.fontFamily = "Roboto,Arial,sans-serif";
          controlText.style.fontSize = "16px";
          controlText.style.lineHeight = "38px";
          controlText.style.paddingLeft = "5px";
          controlText.style.paddingRight = "5px";
          controlText.innerHTML = "Recenter";
          controlUI.appendChild(controlText);

          // Add a click event to recenter the map on the user's location
          controlUI.addEventListener("click", () => {
            map.setCenter(userLocation);
          });
        }
      }

      // Create a custom control for recentering
      const recenterControlDiv = document.createElement("div");
      const recenterControl = new RecenterControl(recenterControlDiv, map);

      // Set the position for the recenter control above the Street View control
      map.controls[google.maps.ControlPosition.TOP_CENTER].push(
        recenterControlDiv
      );

      // Add markers based on the 'pins' array
      pins.forEach((pin) => {
        new google.maps.Marker({
          position: { lat: pin.latitude, lng: pin.longitude },
          map: map,
        });
      });
    }
  }, [userLocation, pins, isUserLocationAvailable]);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Get the user's latitude and longitude
          const { latitude, longitude } = position.coords;

          // Store the location in the state variable
          setUserLocation({ lat: latitude, lng: longitude });

          setIsUserLocationAvailable(true);
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
  }, []);

  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="w-full">
        <div className="">
          <div id="map" style={mapContainerStyle}></div>
        </div>
      </div>
    </div>
  );
};

export default page;
