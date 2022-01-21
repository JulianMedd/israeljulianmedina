import React from 'react'

const PopUp = ({name, closePopUp}) => {
    return (
        <div className='absolute top-0 left-0 w-screen h-screen flex backdrop-filter backdrop-blur-sm justify-center items-center z-50' onClick={()=>closePopUp()}>
            <div className='relative flex flex-col items-center w-56 h-32 bg-indigo-600 rounded-lg pt-8 p-6 text-white text-xs font-medium text-center'>
                <div className='h-5 w-5 absolute top-2 right-3 flex justify-center items-center rounded-full hover:bg-indigo-400 cursor-pointer' onClick={()=>closePopUp()}>X</div>
                <p>Hola {name} mi formulario no es 100% funcional, es a modo de prueba y muestra.</p>
                <p>Muchas gracias.</p>
            </div>
        </div>
    )
}

export default PopUp
