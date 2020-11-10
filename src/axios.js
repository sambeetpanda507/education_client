import axios from "axios";

const instance = axios.create({
  baseURL: "https://sambeetpanda507-education-backend.glitch.me",
});

export default instance;
