import useAuth from './useAuth'
import { useQuery } from '@tanstack/react-query'
const useGetDate = () => {
  const { user } = useAuth()
  const { refetch, isPending, error, data } = useQuery({
    queryKey: ['alltask', user?.email],
    queryFn: async () => {
      const res = await fetch(`https://task-server-sand.vercel.app/allTask/${user?.email}`)
      return res.json()
    }
  })
  return [refetch, data, isPending]
}

export default useGetDate