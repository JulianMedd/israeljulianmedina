import React from 'react';
import LayoutSection from '../layout/LayoutSection';
import SkillCard from './SkillCard';
import { logoSkills } from './Helper';

const SkillsPage = () => {
    return (
        <LayoutSection title="S K I L L S">
            <div className="flex flex-row items-center flex-wrap justify-center lg:px-32">
                {
                    logoSkills.map(item => <SkillCard key={item.title} skill={item}/>)
                }
            </div>
        </LayoutSection>
    )
}

export default SkillsPage
