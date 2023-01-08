import React from 'react'
import { Search } from '../component/Search'
import { Card } from '../component/Card'
import { Button } from '../component/Button'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'

type setuserIDProp = {
    setuserID: (newUserId: string | null) => void
}
type getPostProp = {
    userID: string,
    settotalPost: (newTotalPost: number) => void
}

const useGetProfileData = (setuserID: setuserIDProp) => {
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
            onSuccess: (data) => {
                setuserID(data.id)
                console.log(data)

            }

        }))
}

const useGetPostData = ({ userID, settotalPost }: getPostProp) => {
    return (
        useQuery({
            queryKey: ['post/', userID],
            queryFn: async () => {
                console.log(userID)

                const { data } = await axios.get(`https://expprisma-production.up.railway.app/api/v1/posts/${userID}`)
                return data
            },

            onSuccess: (data) => {
                settotalPost(data.length)

            }

        })
    )
}


export const HomepageLogged = () => {
    const [userID, setuserID] = useState<string>("")
    const [totalPost, settotalPost] = useState<number>(0)
    const navigate = useNavigate()
    const { data, isLoading } = useGetProfileData(setuserID)
    const { data: postData, isLoading: postisLoading } = useGetPostData({ userID, settotalPost })

    return (
        <>
            <div className='w-full h-12 bg-blue-500 rounded-t-lg p-7 flex flex-row justify-center items-center'>
                <Search />
            </div>
            <div className='flex flex-col w-full items-center justify-center flex-1 h-[500px] mt-auto'>
                <div className='grid grid-cols-3 gap-8'>
                    <Card bgcolor='orange' title='Toplam To Do Sayısı' quantity={totalPost} />
                    <Card bgcolor='slate' title='Yapılacaklar' quantity={2} />
                    <Card bgcolor='neutral' title='Tamamlanmışlar' quantity={10} />
                </div>
            </div>
            <div className='flex flex-col w-full items-center justify-center'>
                <Button title='To Do Düzenle' size='xl' onClick={() => navigate('/todo')} type='primary' className='mt-14 w-1/2 text-white' />
            </div>
        </>
    )
}
