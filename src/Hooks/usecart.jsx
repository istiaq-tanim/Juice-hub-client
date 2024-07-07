import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { UserContext } from "../Provider/AuthProvider"

export const useCart = () => {
  const { user } = useContext(UserContext)
  const { refetch, data: cart = [] } = useQuery(
    {
      queryKey: ['carts', user?.email],
      queryFn: async () => {
        const response = await fetch(`http://localhost:5000/carts/?email=${user?.email}`)
        return response.json()
      },
    }
  )
  return [cart, refetch]
}