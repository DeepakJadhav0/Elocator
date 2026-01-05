// Function to calculate distance between two points (Haversine formula)
 export const calculateDistance = (loc1, loc2) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = (loc2[1] - loc1[1]) * (Math.PI / 180);
    const dLon = (loc2[0] - loc1[0]) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(loc1[1] * (Math.PI / 180)) *
        Math.cos(loc2[1] * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in km
    return distance;
  };