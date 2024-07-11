import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
  },
  maxBodyLength: Infinity,
});
