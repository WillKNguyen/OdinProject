import React from 'react';

const DisplayProject = (props) => {
    const {projectname, description} = props.data;
    return (
        <div>
            <div>{projectname}</div>
            <div>{description}</div>
        </div>        
    )
}

export default DisplayProject;