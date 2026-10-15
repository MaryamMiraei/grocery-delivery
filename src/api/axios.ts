import axios from "axios";
export const api = axios.create({
  baseURL: "https://grocery-delivery-server-nu.vercel.app/api",
});
