import React from 'react'

interface InputProps{
placeholder: string;
label:string;
name:string;
id:string;
type: string;
className?: string
}

const Input = ({placeholder, label, name, id, type, className}:InputProps) => {
  return (
    <div className='my-4 flex flex-col'>
        <label className='text-cinzaMedio font-bold text-sm '>{label}</label>
        <input type={type} name={name} id={id} className={`border-2 border-bordaFormulario rounded-xl py-2 px-3 mt-2 focus:outline-1 outline-vermelho text-cinzaMedio ${className}`} placeholder={placeholder} />
    </div>
  )
}

export default Input