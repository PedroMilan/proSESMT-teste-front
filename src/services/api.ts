import axios from "axios";

const api = axios.create({
  baseURL: "https://covid19-brazil-api.vercel.app/api/report/v1",
});

export default api;
