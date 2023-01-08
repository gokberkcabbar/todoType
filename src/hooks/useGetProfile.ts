import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
type setUserIDType = (newUserId: string | null) => void


export const useGetProfile = () => {
  return (
      useQuery({
          queryKey: ['user'],
          queryFn: async () => {
              const { data } = await axios.get('https://expprisma-production.up.railway.app/api/v1/users/profile',
                  {
                      headers: {
                          "Authorization": "Bearer " + localStorage.getItem('token')
                      }
                  }
              )
              return (data)
          },
          onError: (error) => {
              localStorage.removeItem('token')
          },

      }))
}