import React from 'react'

interface InputProps{
placeholder: string;
label?:string;
name:string;
id:string;
type: string;
className?: string
value?: string
}

const Input = ({placeholder, label, name, id, type, className, value}:InputProps) => {
  return (
    <div className='my-2 flex flex-col'>
        <label className='text-cinzaMedio font-bold text-md '>{label}</label>
        <input type={type} name={name} id={id} value={value} className={`border-2 border-bordaFormulario rounded-xl py-2 px-3 mt-1 focus:outline-1 outline-vermelho text-cinzaMedio ${className}`} placeholder={placeholder} />
    </div>
  )
}

export default Input