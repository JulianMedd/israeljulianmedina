import React from 'react';
import Image from 'next/image';

const SkillCard = ({skill}) => {
   
    return (
        <article className="w-24 h-32 flex flex-col items-center p-2">
            <div className="w-10 h-14 grayScale">
                <div className="h-full" >
                    <Image
                        alt={skill.title}
                        src={skill.url}
                        layout="responsive"
                    />
                </div>
            </div>
            <h2 className="pt-2 text-indigo-500 text-center text-xs font-thin">
                {/* tittle */}{skill.title}
            </h2>
        </article>
    )
}

export default SkillCard
