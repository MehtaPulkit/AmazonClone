import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-amazno.cloudfunctions.net/api",
});

// baseURL: "http://localhost:5001/amazno/us-central1/api",
export default instance;
