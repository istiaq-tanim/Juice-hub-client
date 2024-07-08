import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { UserContext } from './../Provider/AuthProvider';

export const useAdmin = () => {
  const { user } = useContext(UserContext)

  const { data: isAdmin } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const response = await fetch(`https://juice-hub-server.vercel.app/users/admin/${user?.email}`)
      return response.json()
    }
  })

  return [isAdmin]
}