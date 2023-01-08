import React from 'react'
type Buttonprops = {
    title : string,
    type ?: "default" | "danger" | "primary" | "secondary",
    size ?: "sm" | "xl" | "lg" | "bs",
    onClick : ()=> void,
    className ?: string
}

const sizes = {
    "sm" : 'text-sm px-2 py-1',
    "xl" : "text-xl px-4 py-2",
    "lg" : "text-lg px-3 py-1.5",
    "bs" : "text-base px-2 py-1"
}

const types = {
    "default" : 'bg-white border border-sky-200',
    "danger" : 'bg-red-600 border-red-900',
    "primary" : 'bg-sky-600 border-sky-900',
    "secondary" : 'bg-slate-200 border-slate-500'
}

export const Button = ({
    title,
    type="default",
    size="bs",
    onClick,
    className,
}:Buttonprops) => {
  return (
    <button className={`${sizes[size]} rounded-lg shadow-lg ${types[type]} ${className}`} onClick={onClick}>{title}</button>
  )
}
