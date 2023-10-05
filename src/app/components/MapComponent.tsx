// Import necessary libraries
"use client";
import { useEffect, useState } from 'react';

// Define the component
const MapComponent: React.FC = () => {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [circleRadius, setCircleRadius] = useState<number>(1000); // Default radius in meters

  // Function to get user's location
  const getUserLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by your browser');
    }
  };

  // useEffect to get user's location when the component mounts
  useEffect(() => {
    getUserLocation();
  }, []);

  // Function to handle radius change
  const handleRadiusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newRadius = parseInt(event.target.value, 10);
    setCircleRadius(newRadius);
  };

  return (
    <div className="relative w-full h-96">
      {userLocation ? (
        <>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d${userLocation.lng}!3d${userLocation.lat}!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus`}
            frameBorder="1"
            style={{ border: 0 }}
            aria-hidden="false"
            tabIndex={0}
          />
          <svg
            className="absolute top-0 left-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 0 ${circleRadius * 2} ${circleRadius * 2}`}
          >
            <circle
              cx={circleRadius}
              cy={circleRadius}
              r={circleRadius}
              fill="rgba(0, 0, 255, 0.2)" // Adjust color and opacity as needed
            />
          </svg>
          <div className="absolute top-2 right-2">
            <label htmlFor="radius">Select Radius: </label>
            <select id="radius" name="radius" onChange={handleRadiusChange} value={circleRadius}>
              <option value="500">500m</option>
              <option value="1000">1000m</option>
              <option value="2000">2000m</option>
            </select>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MapComponent;
