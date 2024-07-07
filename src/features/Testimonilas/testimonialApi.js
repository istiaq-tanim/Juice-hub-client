import axios from "axios"

export const getTestimonials = async () => {
   const response = await axios.get("http://localhost:5000/review")
   return response.data
}