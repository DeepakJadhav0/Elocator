import React, { useEffect, useState } from "react";

// Function to get city from coordinates
async function getCityFromCoords(latitude, longitude) {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
  );
  const data = await res.json();
  return data.address.city || data.address.town || data.address.village || "City not found";
}

export default function Location() {
  const [city, setCity] = useState("Loading...");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const userCity = await getCityFromCoords(latitude, longitude);
      setCity(userCity);
    });
  }, []);

  return <div>{city}</div>;
}
