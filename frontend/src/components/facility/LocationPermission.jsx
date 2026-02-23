// LocationPermission.js
import React from "react";

export default function LocationPermission({ onAllow, onDeny }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md text-center">
        <h2 className="text-xl font-semibold mb-2">
          Enable Location Access 📍
        </h2>
        <p className="text-gray-600 text-sm mb-6">
          We need your location to show nearby e-waste recycling facilities.
          Your location is only used to calculate distance.
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={onAllow}
            className="px-5 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700"
          >
            Allow Location
          </button>

          <button
            onClick={onDeny}
            className="px-5 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
          >
            Not Now
          </button>
        </div>
      </div>
    </div>
  );
}
