import { useQuery } from "@tanstack/react-query";
const useJuice = () => {
  const { data: juice = [], refetch } = useQuery({
    queryKey: ["juiceItems"],
    queryFn: async () => {
      const res = await fetch("https://juice-hub-server.vercel.app/juiceItems")
      return res.json()
    }
  })
  return [juice, refetch]
}
export default useJuice;