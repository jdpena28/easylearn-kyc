import React from "react"


const Input = ({ label, placeholder,onChange }) => {

  return (
    <div className='flex flex-col'>
      <label className='text-xl font-semibold pl-1' htmlFor={label.trim()}>
        {label}
      </label>
      <input
        className='bg-gray-300 placeholder-slate-500 w-60 sm:w-full h-10 rounded-md pl-1'
        type='text'
        name={label.trim()}
        id={label.trim()}
        required
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input
