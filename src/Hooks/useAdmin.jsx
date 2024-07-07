import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { UserContext } from './../Provider/AuthProvider';

export const useAdmin = () => {
  const { user } = useContext(UserContext)

  const { data: isAdmin } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const response = await fetch(`http://localhost:5000/users/admin/${user?.email}`)
      return response.json()
    }
  })

  return [isAdmin]
}