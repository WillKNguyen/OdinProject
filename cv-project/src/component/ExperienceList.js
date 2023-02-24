import React from 'react';
import Experience from './Experience';

function ExperienceList ({heading, experienceList}) {
    return (
        <div>
            {heading ? <h3>{heading}</h3> : null}
            {experienceList.map((item, id) => {
                const {company, position, start, end, description} = item;
                return (
                    <Experience
                        key={id}
                        company={company}
                        position={position}
                        start={start}
                        end={end}
                        description={description}
                    />
                )
            })}
        </div>        
    )
}

export default ExperienceList;