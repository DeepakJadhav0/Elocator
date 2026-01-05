import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import axios from "axios";
import {calculateDistance} from "./calculateDistance"
import { useDispatch, useSelector } from "react-redux";
import { addFacilities } from "../../redux/slice/facilitySlice";

// Add the Mapbox Access Token
mapboxgl.accessToken = "pk.eyJ1Ijoic2h1ZW5jZSIsImEiOiJjbG9wcmt3czMwYnZsMmtvNnpmNTRqdnl6In0.vLBhYMBZBl2kaOh1Fh44Bw";

export default function SimpleMap() {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const facilityMarkers = useRef([]);

  const [userLocation, setUserLocation] = useState(null);
  const [filterDistance, setFilterDistance] = useState("5"); 

  const facilities = useSelector(state => state.facilityReducer)
  const dispatch = useDispatch()

  // Fetch facilities on initial render
  useEffect(() => {
    GetFacilities();
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const loc = [
          position.coords.longitude,
          position.coords.latitude,
        ];
        setUserLocation(loc);

        mapInstance.current = new mapboxgl.Map({
          container: mapRef.current,
          style: "mapbox://styles/mapbox/streets-v11",
          center: loc,
          zoom: 12, // Initial zoom level for 5 km
        });

        new mapboxgl.Marker({ color: "blue" })
          .setLngLat(loc)
          .setPopup(new mapboxgl.Popup().setText("Your Location"))
          .addTo(mapInstance.current);
      },
      (error) => console.error("Geolocation error:", error)
    );

    return () => mapInstance.current?.remove();
  }, []);

  const handleFilterChange = (event) => {
    setFilterDistance(event.target.value);
  };

  // Function to adjust the map zoom based on the selected distance filter
  const adjustZoom = (distance) => {
    let zoomLevel;
    if (distance === "5") {
      zoomLevel = 12; // Zoom out slightly for 5 km
    } else if (distance === "20") {
      zoomLevel = 11; // Zoom out more for 20 km
    } else if (distance === "50") {
      zoomLevel = 10; // Zoom out even more for 50 km
    }
    if (mapInstance.current) {
      mapInstance.current.setZoom(zoomLevel);
    }
  };

  // Filter facilities based on the selected radius
  useEffect(() => {
    if (userLocation && facilities.length > 0) {
      const filtered = facilities.filter((facility) => {
        const distance = calculateDistance(userLocation, [facility.lon, facility.lat]);
        return distance <= parseInt(filterDistance); // Use the selected radius
      });

      // Update the markers on the map
      if (mapInstance.current) {
        // Remove old markers
        facilityMarkers.current.forEach((marker) => marker.remove());
        facilityMarkers.current = [];

        filtered.forEach((item) => {
          const marker = new mapboxgl.Marker({ color: item.verified ? "green" : "red" })
            .setLngLat([item.lon, item.lat])
            .setPopup(new mapboxgl.Popup().setText(item.name))
            .addTo(mapInstance.current);

          facilityMarkers.current.push(marker);
        });

        // Adjust zoom based on filter distance
        adjustZoom(filterDistance);
      }
    }
  }, [filterDistance, facilities, userLocation]);

  // Fetch facilities from your API
  async function GetFacilities() {
    const res = await axios.get("http://localhost:3000/facility");
    dispatch(addFacilities(res.data.facilities));
  }

  return (
    <section className="min-h-screen bg-gray-100 flex flex-col items-center p-10">
      <div className="flex items-center w-[500px] text-center flex-col mb-10">
        <h1 className="text-3xl font-semibold">
          E-waste Recycling Facility{" "}
          <span className="text-orange-600">Locator</span>
        </h1>
        <p className="text-gray-700">
          Find certified e-waste collection and recycling centers near you.
        </p>
      </div>

      <div className="flex w-full">
        <div className="w-[40%]">
          <div className="bg-white p-2 rounded-md shadow-md inline-flex items-center gap-3">
            <h1 className="text-sm font-semibold">Filter Facility</h1>

            <button
              onClick={GetFacilities}
              className="text-[12px] p-1 rounded-md bg-gray-50 border"
            >
              Verified Only
            </button>

            <select
              className="text-[13px] p-1 rounded-md bg-gray-50 border"
              value={filterDistance}
              onChange={handleFilterChange}
            >
              <option value="5">Within 5 km</option> {/* Default to 5 km */}
              <option value="20">Within 20 km</option>
              <option value="50">Within 50 km</option>
            </select>
          </div>
        </div>

        <div>
          <div
            ref={mapRef}
            className="h-[430px] rounded-md shadow-md w-[800px]"
          />
        </div>
      </div>
    </section>
  );
}
