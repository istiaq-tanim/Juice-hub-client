import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { UserContext } from "../Provider/AuthProvider"

export const useTransactions = () => {
      const { user } = useContext(UserContext)
      const { data: transactions = [] } = useQuery(
            {
                  queryKey: ['transactions', user?.email],
                  queryFn: async () => {
                        const response = await fetch(`https://juice-hub-server.vercel.app/payments/last-year?email=${user?.email}`)
                        return response.json()
                  },
            }
      )
      return transactions
}

