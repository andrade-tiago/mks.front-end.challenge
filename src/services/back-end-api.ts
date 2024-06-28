import axios from "axios";

const backEndAPI = axios.create({
  baseURL: import.meta.env.VITE_BACK_END_API_URL,
})

export default backEndAPI
