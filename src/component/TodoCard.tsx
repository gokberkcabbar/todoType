import React from 'react'
import { useState } from 'react'

export const TodoCard = ({
    title,
    content
}: {title: string, content: string}) => {
    const [collapsed, setcollapsed] = useState(true)
    return (
        <div className='flex flex-col rounded-lg bg-white border shadow-md h-auto transition-all border-slate-100'>

            <div onClick={() => {
                setcollapsed(!collapsed)
            }} className='flex flex-row p-3 items-center justify-between'>
                <div className='flex flex-row gap-4'>
                    <input onClick={()=>{}} type="checkbox" className="checkbox checkbox-primary" />
                    <p>{title}</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='line-clamp-1'>Oluşturulma Tarihi</p>
                    <p>29 Mayıs 1453</p>
                </div>
            </div>
            <div className={`flex w-full ${collapsed ? "h-0 opacity-0 p-0" : "h-auto p-2 opacity-100"} transition-all overflow-hidden transform-gpu`}>
                {content}
            </div>
        </div>
    )
}
