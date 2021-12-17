import React from 'react'
import LayoutSection from '../layout/LayoutSection'
import SkillCard from './SkillCard'

const SkillsPage = () => {
    return (
        <LayoutSection title="S K I L L S">
            <div className="flex flex-row items-center">
                <SkillCard/>
                <SkillCard/>
            </div>
        </LayoutSection>
    )
}

export default SkillsPage
