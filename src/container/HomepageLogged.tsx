import React from 'react'
import { Search } from '../component/Search'
import { Card } from '../component/Card'
import { Button } from '../component/Button'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'
import { useAuth } from '../providers/AuthProvider'
import { useGetProfile } from '../hooks/useGetProfile'
import { useGetData } from '../hooks/useGetData'






export const HomepageLogged = () => {
    const navigate = useNavigate()
    const { data: postData, isLoading: postisLoading } = useGetData()

    return (
        <>
            <div className='w-full h-12 bg-blue-500 rounded-t-lg p-7 flex flex-row justify-center items-center'>
                <Search />
            </div>
            <div className='flex flex-col w-full items-center justify-center flex-1 h-[500px] mt-auto'>
                <div className='grid grid-cols-3 gap-8'>
                    <Card bgcolor='orange' title='Toplam To Do Sayısı' quantity={(postData || []).length} />
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
