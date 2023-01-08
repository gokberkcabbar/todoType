import React from 'react'
import Dropdown from '../component/Dropdown'
import { Sidebar } from '../component/Sidebar'
import { IconPlus, IconTrash } from '@tabler/icons'

export const Todo = () => {
    return (
        <>
            <Sidebar className='fixed left-0 h-full' />

            <div className='h-[500px] shadow-xl ml-[240px] bg-slate-100 p-4'>
                <div className='flex flex-row gap-x-3 items-center'>
                    <Dropdown />
                    <IconPlus size={24} />
                    <IconTrash size={24} />
                </div>
                <div className='container mx-auto p-6'>

                </div>
            </div>
        </>

    )
}
