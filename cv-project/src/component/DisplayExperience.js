import React from 'react';

const DisplayExperience = (props) => {
    const {company, position, start, end, description} = props.data;
    return (
        <div>
            <div>{company}</div>
            <div>{position}</div>
            <div>{start}</div>
            <div>{end}</div>
            <div>{description}</div>
        </div>        
    )
}

export default DisplayExperience;