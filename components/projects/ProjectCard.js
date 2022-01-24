import React from 'react';

const ProjectCard = ({ name, description, url, tools }) => {
    return (
        <div className='card group w-56 h-36 rounded-md'>
            <div className='w-full h-16 px-4 pt-2 text-white rounded-t-md bg-gray-300 group-hover:bg-indigo-400 '>
                <h3 className=' font-normal '>{name}</h3>
            </div>
            <div className='cardDescription bg-white flex-col gap-2 px-4 py-4 font-light text-indigo-400'>
                <div>
                    <p className='leading-none text-sm border-b-2 pb-4'>{ description }</p>
                </div>
                <div>
                    <p className='leading-none text-gray-300 text-center'>{tools}</p>
                </div>
            </div>
            <div className='w-full bg-indigo-400 rounded-b-lg text-white px-4 py-2'>
                <a href={url} target="_blank">ver codigo</a>
            </div>
        </div>
    )
}

export default ProjectCard;
