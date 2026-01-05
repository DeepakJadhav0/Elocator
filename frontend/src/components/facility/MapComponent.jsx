import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useSelector } from "react-redux";
import { calculateDistance } from "./calculateDistance";
import FacilityMarker from "./FacilityMarker";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2h1ZW5jZSIsImEiOiJjbG9wcmt3czMwYnZsMmtvNnpmNTRqdnl6In0.vLBhYMBZBl2kaOh1Fh44Bw";

export default function MapComponent({ userLocation, facilities, filterDistance }) {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const facilityMarkers = useRef([]);

  const selectedFacility = useSelector((state) => state.userFacility);

  /* -------------------- INIT MAP -------------------- */
  useEffect(() => {
    if (!userLocation) return;

    mapInstance.current = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: userLocation,
      zoom: 12,
    });

    new mapboxgl.Marker({ color: "blue" })
      .setLngLat(userLocation)
      .setPopup(new mapboxgl.Popup().setText("Your Location"))
      .addTo(mapInstance.current);

    return () => mapInstance.current?.remove();
  }, [userLocation]);

  /* -------------------- ADD FACILITY MARKERS -------------------- */
  useEffect(() => {
    if (!mapInstance.current || !userLocation) return;

    // Remove old markers
    facilityMarkers.current.forEach((marker) => marker.remove());
    facilityMarkers.current = [];

    const filteredFacilities = facilities.filter((facility) => {
      const distance = calculateDistance(userLocation, [facility.lon, facility.lat]);
      return distance <= parseInt(filterDistance);
    });

    filteredFacilities.forEach((facility) => {
      const marker = new FacilityMarker(facility, mapInstance.current);
      facilityMarkers.current.push(marker);
    });

    adjustZoom(filterDistance);
  }, [facilities, filterDistance, userLocation]);

  /* -------------------- DRAW ROUTE ON SELECTION -------------------- */
  useEffect(() => {
    if (!selectedFacility || !mapInstance.current || !userLocation) return;

    const destination = [selectedFacility.lon, selectedFacility.lat];

    mapInstance.current.flyTo({
      center: destination,
      zoom: 14,
    });

    drawRoute(userLocation, destination);
  }, [selectedFacility]);

  /* -------------------- ZOOM CONTROL -------------------- */
  const adjustZoom = (distance) => {
    const zoomMap = { "5": 12, "20": 11, "50": 10 };
    mapInstance.current?.setZoom(zoomMap[distance] || 12);
  };

  /* -------------------- ROUTE FUNCTION -------------------- */
  async function drawRoute(from, to) {
    const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${from[0]},${from[1]};${to[0]},${to[1]}?geometries=geojson&access_token=${mapboxgl.accessToken}`;
    const res = await fetch(url);
    const data = await res.json();
    const route = data.routes[0].geometry;

    // Remove existing route
    if (mapInstance.current.getSource("route")) {
      mapInstance.current.removeLayer("route");
      mapInstance.current.removeSource("route");
    }

    mapInstance.current.addSource("route", {
      type: "geojson",
      data: { type: "Feature", geometry: route },
    });

    mapInstance.current.addLayer({
      id: "route",
      type: "line",
      source: "route",
      paint: { "line-color": "#2563eb", "line-width": 5 },
    });
  }

  return <div ref={mapRef} className="h-[520px] w-[800px] m-3 rounded-md shadow-md" />;
}
