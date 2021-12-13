import React from "react";
import Image from 'next/image';
import fotoPerfil from "../../public/foto_perfil.png";

const Hero = () => {
    return (
        <div className="animate-apear pt-16 overflow-hidden w-screen h-screen flex flex-col items-center justify-between md:w-4/5 lg:flex-row md:ml-60 md:pt-0">
            
            <div className="relative w-full h-1/2 px-8 pt-12 text-center md:px-2 md:w-1/2">
                <div className="-z-1 leading-none absolute -left-10 -top-20 text-10xl font-black text-indigo-100">
                    <p>HO</p>
                    <p className="-mt-20">LA!</p>
                </div>
                <p className="text-4xl font-thin text-indigo-900">MI NOMBRE ES</p>
                <h1 className="text-4xl font-semibold text-indigo-900">JULIAN MEDINA</h1>
                <h2 className="text-2xl font-thin text-indigo-900 py-6">DESARROLLADOR FRONTEND | REACT JS</h2>
                <div className="mt-6">
                    <a  
                        className="p-3 bg-indigo-700 rounded-lg text-white"
                        download="" 
                        href="../../public/Cv_IsraelJulianMedina.pdf" >DESCARGAR CV</a>
                </div>
            </div>
            <div className="w-full h-1/2 overflow-hidden lg:self-end md:w-1/2 lg:h-4/5">
                <Image
                    src={fotoPerfil}
                    layout='responsive'
                    alt="foto principal"
                />
            </div>
        </div>
    )
}

export default Hero
