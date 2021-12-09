import React from "react";
import Image from 'next/image';
import fotoPerfil from "../../public/foto_perfil.png";

const Hero = () => {
    return (
        <div className="flex flex-col justify-between">
            <div>
                <p className="text-8xl font-black text-indigo-100">HOLA!</p>
                <p className="text-5xl font-thin text-indigo-100">MI NOMBRE ES</p>
                <h1 className="text-4xl font-bold text-indigo-900">JULIAN MEDINA</h1>
            </div>
            <Image
                src={fotoPerfil}
                layout='responsive'
            />
        </div>
    )
}

export default Hero
