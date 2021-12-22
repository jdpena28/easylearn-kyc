import React from 'react'

const Input = ({label,placeholder,}) => {
    return (
        <div className='flex flex-col'>
            <label className='text-xl font-semibold pl-1' htmlFor="lastName">{label}</label>
            <input className='bg-gray-300 placeholder-slate-500 w-60 h-10 rounded-md pl-1' type="text" name='lastName' id='lastName' required placeholder={placeholder} />
        </div>
    )
}

export default Input
