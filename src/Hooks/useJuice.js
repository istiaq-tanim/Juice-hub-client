import { useQuery } from "@tanstack/react-query";
const useJuice = () => {
  const { data: juice = [], refetch } = useQuery({
    queryKey: ["juiceItems"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/juiceItems")
      return res.json()
    }
  })
  return [juice, refetch]
}
export default useJuice;