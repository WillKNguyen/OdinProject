import React from 'react';

const DisplayEducation = (props) => {
    const {id, school, degree, start, end} = props.data;
    return (
        <div>
            <div>{school}</div>
            <div>{degree}</div>
            <div>{start}</div>
            <div>{end}</div>
        </div>        
    )
}

export default DisplayEducation;