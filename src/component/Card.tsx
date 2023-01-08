import React from 'react'

type Cardtype = {
    bgcolor: 'neutral' | 'orange' | 'slate',
    title: string,
    quantity?: number,
}

const bgcolors = {
    'neutral': 'bg-neutral text-neutral-content',
    'orange': 'bg-orange-300 text-black',
    'slate': 'bg-slate-300 text-black'
}

export const Card = ({
    bgcolor,
    title,
    quantity = 0

}: Cardtype) => {
    return (
        <div className={`card w-96 ${bgcolors[bgcolor]}`}>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{quantity}</p>
            </div>
        </div>
    )
}
