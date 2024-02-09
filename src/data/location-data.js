const data = [
  {
    location: "London",
    latitude: 51.5073219,
    longitude: -0.1276474,
  },
  {
    location: "Kolkata",
    latitude: 22.5726723,
    longitude: 88.3638815,
  },
  {
    location: "Dhaka",
    latitude: 23.810332,
    longitude: 90.41251809999994,
  },
  {
    location: "Singapore",
    latitude: 1.2899175,
    longitude: 103.8519072,
  },
  {
    location: "New York",
    latitude: 40.7127281,
    longitude: -74.0060152,
  },
  {
    location: "Toronto",
    latitude: 43.6534817,
    longitude: -79.3839347,
  },
  {
    location: "Badarganj",
    latitude: 25.67419,
    longitude: 89.05377,
  },
  {
    location: "Khulna",
    latitude: 22.82,
    longitude: 89.550003,
  },
  {
    location: "Gazipur",
    latitude: 23.999941,
    longitude: 90.420273,
  },
  {
    location: "Narayanganj",
    latitude: 23.622641,
    longitude: 90.499794,
  },
  {
    location: "Rangpur",
    latitude: 25.74486,
    longitude: 89.275589,
  },
  {
    location: "Panchagarh",
    latitude: 26.335377,
    longitude: 88.551697,
  },
  {
    location: "Chattogram",
    latitude: 22.3419,
    longitude: 91.815536,
  },
  {
    location: "Satkhira",
    latitude: 22.723406,
    longitude: 89.075127,
  },
  {
    location: "Dinajpur",
    latitude: 25.636574,
    longitude: 88.636322,
  },
];

function getLocations() {
  return data;
}

function getLocationByName(location) {
  if (!location) return null;

  const filtered = data.filter((item) => item.location === location);

  if (filtered.length > 0) {
    return filtered[0];
  } else {
    const defaultLocation = {
      location: "",
      latitude: 0,
      longitude: 0,
    };
    return defaultLocation;
  }
}

export { getLocationByName, getLocations };
