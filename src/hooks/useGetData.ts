import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useGetProfile } from "./useGetProfile"

type getDataType = 
{
  "id": string,
  "title": string,
  "content": string,
  "published": boolean,
  "authorId": string,
  "createdAt": string,
  "updatedAt": string
}

export const useGetData = () => {
  const { data: profile, isLoading } = useGetProfile()
  return (
    useQuery({
      queryKey: ['post/', profile?.id],
      queryFn: async () => {
        const { data } = await axios.get(`https://expprisma-production.up.railway.app/api/v1/posts/${profile?.id}`)
        return data as getDataType[]
      },
      enabled: typeof (profile?.id) === 'string'

    })
  )
}