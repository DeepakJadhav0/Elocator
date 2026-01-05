// SimpleMap.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addFacilities } from "../../redux/slice/facilitySlice";
import MapComponent from "./MapComponent";
import FacilityFilter from "./FacilityFilter";
import RecyclingCard from "./Cards/RecyclingCard";
import { calculateDistance } from "./calculateDistance";

export default function SimpleMap() {
  const [userLocation, setUserLocation] = useState(null);
  const [filterDistance, setFilterDistance] = useState("5");
  const [showVerifiedOnly, setShowVerifiedOnly] = useState(false);

  const facilities = useSelector((state) => state.facilityReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchFacilities();
    navigator.geolocation.getCurrentPosition(
      (position) => setUserLocation([position.coords.longitude, position.coords.latitude]),
      (error) => console.error("Geolocation error:", error)
    );
  }, []);

  async function fetchFacilities() {
    try {
      const res = await axios.get("http://localhost:3000/facility");
      dispatch(addFacilities(res.data.facilities));
    } catch (error) {
      console.error("Error fetching facilities:", error);
    }
  }

  const handleFilterChange = (e) => setFilterDistance(e.target.value);
  const toggleVerifiedOnly = () => setShowVerifiedOnly(!showVerifiedOnly);

  const filteredFacilities = facilities.filter((facility) => {
    if (showVerifiedOnly && !facility.verified) return false;
    if (userLocation) {
      const distance = calculateDistance(userLocation, [facility.lon, facility.lat]);
      return distance <= parseInt(filterDistance);
    }
    return true;
  });

  return (
    <section className="min-h-screen bg-gray-100 flex flex-col items-center p-4 sm:p-10">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-10 w-full sm:w-[500px]">
        <h1 className="text-2xl sm:text-3xl font-semibold">
          E-waste Recycling Facility <span className="text-orange-600">Locator</span>
        </h1>
        <p className="text-gray-700 mt-1 text-sm sm:text-base">
          Find certified e-waste collection and recycling centers near you.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row w-full gap-4 lg:gap-6">
        {/* Sidebar */}
        <div className="w-full lg:w-[40%] flex flex-col">
          <FacilityFilter
            filterDistance={filterDistance}
            handleFilterChange={handleFilterChange}
            showVerifiedOnly={showVerifiedOnly}
            toggleVerifiedOnly={toggleVerifiedOnly}
          />
          <div className="h-[300px] sm:h-[530px] border shadow-md mt-2 overflow-auto">
            {filteredFacilities.slice(0, 10).map((item) => (
              <RecyclingCard key={item._id} item={item} />
            ))}
          </div>
        </div>

        {/* Map & Legend */}
        <div className="flex-1 flex flex-col items-center">
          {/* Legend */}
          <ul className="flex flex-wrap text-[12px] gap-2 text-gray-700 justify-center mb-3">
            <li className="border p-2 rounded-md bg-gray-50 shadow-md hover:bg-gray-100 flex items-center gap-1">
              <span className="bg-green-600 rounded-full p-1"></span> Verified Facility
            </li>
            <li className="border p-2 rounded-md bg-gray-50 shadow-md hover:bg-gray-100 flex items-center gap-1">
              <span className="bg-red-600 rounded-full p-1"></span> UnVerified Facility
            </li>
            <li className="border p-2 rounded-md bg-gray-50 shadow-md hover:bg-gray-100 flex items-center gap-1">
              <span className="bg-blue-600 rounded-full p-1"></span> Your Location
            </li>
          </ul>

          {/* Map */}
          <MapComponent
            userLocation={userLocation}
            facilities={filteredFacilities}
            filterDistance={filterDistance}
          />
        </div>
      </div>
    </section>
  );
}
