import React from 'react';
import LayoutSection from '../layout/LayoutSection';
import { personalProjects } from './Helpers';
import ProjectCard from './ProjectCard';

const ProjectsContainer = () => {
    return (
        <LayoutSection title='PROYECTOS'>
            <div className='flex flex-col md:flex-row md:flex-wrap justify-center gap-2'>
                {
                    personalProjects.map((project)=>(
                        <ProjectCard 
                            key={project.name}
                            name={project.name}
                            description={project.description}
                            url={project.url}
                            tools={project.tools}
                        />
                            
                        )
                    )
                }
            </div>
        </LayoutSection>
    )
}

export default ProjectsContainer;
