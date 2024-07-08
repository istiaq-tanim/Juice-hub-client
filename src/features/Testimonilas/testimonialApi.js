import axios from "axios"

export const getTestimonials = async () => {
   const response = await axios.get("https://juice-hub-server.vercel.app/review")
   return response.data
}