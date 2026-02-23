import { useState, useEffect } from "react";

export const useLocation = () => {
  const [location, setLocation] = useState({
    city: "Loading...",
    state: "",
    error: null,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation((prev) => ({ ...prev, city: "Unsupported", error: "Not supported" }));
      return;
    }

    const fetchAddress = async (lat, lon) => {
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
        );
        const data = await res.json();
        const address = data.address || {};
        
        const city = address.city || address.town || address.village || "Unknown City";
        const state = address.state || "";
        
        setLocation({ city, state, error: null });
      } catch (err) {
        setLocation((prev) => ({ ...prev, city: "Location Error", error: err }));
      }
    };

    navigator.geolocation.getCurrentPosition(
      (pos) => fetchAddress(pos.coords.latitude, pos.coords.longitude),
      () => setLocation((prev) => ({ ...prev, city: "Permission Denied" }))
    );
  }, []);

  return location;
};