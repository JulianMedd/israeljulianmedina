import React from 'react';
import LayoutSection from '../layout/LayoutSection';
import Image from 'next/image';
import fotoPerfil from "../../public/foto_perfil.png";

const About = () => {
    return (
        <LayoutSection title="S O B R E  M I">
                <div className="w-full flex flex-col items-center lg:flex-row">
                        {/* foto */}
                    <article className="w-full h-60 flex flex-col items-center lg:h-full lg:w-1/2">
                        <div className="w-48 h-48 rounded-full overflow-hidden bg-indigo-400">
                            <div className="w-full h-full overflow-hidden pt-4">
                                <Image
                                    alt='foto perfil'
                                    src={fotoPerfil}
                                    layout='responsive'
                                />
                            </div>
                        </div>
                        <div className="hidden lg:inline-block pt-4">
                            <h3 className="text-indigo-700 text-xl font-medium">Mi nombre es Israel Julian Medina</h3>
                            <h4 className="text-sm font-light text-indigo-400">DESARROLLADOR FRONTEND | <span>REACT JS</span></h4>
                        </div>
                    </article>
                        {/* texto */}
                    <article className="w-full lg:h-full lg:w-1/2 px-4 text-center lg:text-left">
                        <div className="flex flex-col items-center space-y-2 md:px-8">
                            <div className="lg:hidden">
                                <h3 className="text-indigo-700 text-xl font-medium">Mi nombre es Israel Julian Medina</h3>
                                <h4 className="text-sm font-light text-indigo-400">DESARROLLADOR FRONTEND | <span>REACT JS</span></h4>
                            </div>
                            <div className="text-gray-500 font-normal space-y-3 pb-12 md:pb-0">
                                <p>De forma autodidacta descubrí que la programación es mi verdadera pasión, desde entonces decidí no parar de aprender y continué con cursos e investigando para perfeccionar mis habilidades. Debido a esto tome la decision de dejar mi anterior profesion (diseñador gráfico) e incursionar en el rubro IT anotandome en la carrera de Lic. en Informatica en la U.N.O.. Por esto me considero un Desarrollador en busca de mi primera experiencia laboral en el rubro.</p>
                                <p>Soy un apasionado por este mundo, por ende siempre estaré dispuesto a nuevos desafíos y a aprender nuevas tecnologías y/o lenguajes.</p>
                                <p>Me gustaría desenvolverme en este mundo tecnológico y poder ser parte de su equipo de trabajo, con el fin de desarrollar y mejorar mis habilidades, avanzando en conjunto.</p>
                            </div>
                        </div>
                    </article>
                </div>
        </LayoutSection>
    )
}

export default About
