import React from 'react';

const Input = ({
    placeholder="",
    type="text",
    name,
    onChange,
    value,
    textArea=false,
    error,
    touched

}) => {
    return (
        (!textArea) ? 
            (
            <>
                <input
                    className='w-full md:w-3/5 pl-3 bg-indigo-50 text-lg rounded-md py-2 mb-4 focus:outline-none'
                    placeholder={placeholder}
                    type={type}
                    name={name}
                    onChange={onChange}
                    value={value}
                    touched={touched}
                />
                {error ? (<p className=' text-red-500 font-extralight text-xs'>{error}</p>):(null)}
            </>
            ) :
            (<textarea
                className='w-full h-32 md:w-3/5 pl-3 bg-indigo-50 text-lg rounded-md py-2 mb-4 focus:outline-none'
                placeholder={placeholder}
                type={type}
                name={name}
                onChange={onChange}
                value={value}
            />)
        )
    
}

export default Input;