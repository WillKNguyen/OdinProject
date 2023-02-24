import React from 'react';

const Project = (props) => {
    return (
        <div>
            <form onChange={props.handleArrayChange('projList', props.index)}>
                <input type="text" className="projectname" placeholder='Project Name'/>
                <p></p>
                <input type="text" className="description" placeholder='Description'/>
                <p></p>
                <button type='button' onClick={props.onAddProj}>Add</button>
                <button type='button' onClick={() => props.onDelete('projList', props.id)}>Delete</button>

            </form>
        </div>        
    )
}

export default Project;