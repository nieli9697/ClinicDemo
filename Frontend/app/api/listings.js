import client from "./client";

const endpoint = "/listings";

const getListings = () => client.get(endpoint);

const addListing = (listing) => {
  const data = new FormData();
  data.append("clinic", listing.clinic);
  data.append("doctor", listing.doctor);
  data.append("patient", listing.patient);
  data.append("diagnosis", listing.diagnosis);
  data.append("medication", listing.medication);
  data.append("fee", listing.fee);
  //data.append("followUp", listing.followUp);
  data.append("time", listing.time);

  return client.post(endpoint, data);
};

export default {
  addListing,
  getListings,
};
