import React from 'react';
import LayoutSection from '../layout/LayoutSection';

const About = () => {
    return (
        <LayoutSection>
                <h2 className="text-indigo-700 font-thin tracking-widest py-8 lg:hidden text-2xl">
                    S O B R E  M I
                </h2>
                <article className="w-full h-60 lg:h-full lg:w-1/2 bg-indigo-700 p-8">
                    {/* foto */}
                    <div className="w-full h-full bg-purple-400">

                    </div>
                </article>
                <article className="w-full lg:h-full lg:w-1/2 px-4 py-8 text-center">
                    {/* texto */}
                    <div className="flex flex-col items-center space-y-2">
                        <div>
                            <h3 className="text-indigo-700 text-xl font-medium">Mi nombre es Israel Julian Medina</h3>
                            <h4 className="text-sm font-light text-indigo-400">DESARROLLADOR FRONTEND | <span>ex diseñador gráfico</span></h4>
                        </div>
                        <div className="text-gray-500 font-normal space-y-3">
                            <p>
                            De forma autodidacta descubrí que la programación es mi verdadera pasión, desde entonces decidí no parar de aprender y continué con cursos e investigando para perfeccionar mis habilidades. Debido a esto tome la decision de dejar mi anterior profesion (diseñador gráfico) e incursionar en el rubro IT anotandome en la carrera de "Lic. en Informatica" en la U.N.O.. Por esto me considero un Desarrollador en busca de mi primera experiencia laboral en el rubro.
                            </p>
                            <p>
                            Soy un apasionado por este “mundo”, por ende siempre estaré dispuesto a nuevos desafíos y a aprender nuevas tecnologías y/o lenguajes.
                            </p>
                            <p>
                            “Me gustaría desenvolverme en este mundo tecnológico y poder ser parte de su equipo de trabajo, con el fin de desarrollar y mejorar mis habilidades, avanzando en conjunto.”
                            </p>
                        </div>
                    </div>
                </article>
        </LayoutSection>
    )
}

export default About
