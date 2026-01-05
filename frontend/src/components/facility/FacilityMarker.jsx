// FacilityMarker.js
import mapboxgl from "mapbox-gl";

export default function FacilityMarker(facility, mapInstance) {
  const marker = new mapboxgl.Marker({ color: facility.verified ? "green" : "red" })
    .setLngLat([facility.lon, facility.lat])
    .setPopup(new mapboxgl.Popup().setText(facility.name))
    .addTo(mapInstance);
  
  return marker;
}
