const getLocation = () =>
  new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      (pos) => resolve([pos.coords.longitude, pos.coords.latitude]),
      () => resolve(null)
    );
  });

export default getLocation;
