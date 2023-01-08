import React from 'react'
import Dropdown from '../component/Dropdown'
import { Sidebar } from '../component/Sidebar'
import { IconPlus, IconTrash } from '@tabler/icons'
import { TodoCard } from '../component/TodoCard'
import { useGetData } from '../hooks/useGetData'


export const Todo = () => {
    const { data: postData, isLoading: postisLoading } = useGetData()
    return (
        <>
            <Sidebar className='fixed left-0 h-full' />

            <div className='h-[500px] shadow-xl ml-[240px] bg-slate-100 p-4'>
                <div className='flex flex-row gap-x-3 items-center'>
                    <Dropdown />
                    <IconPlus size={24} />
                    <IconTrash size={24} />
                </div>
                <div className='container flex flex-col gap-y-2 mt-3 mx-auto p-6 w-3/4'>
                    {(postData || [])?.map((value, key: number) => {
                        return (
                            <TodoCard key={key} title={value.title} content={value.content} />
                        )
                    })}
                </div>
            </div>
        </>

    )
}
