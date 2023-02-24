import React from 'react';

const Project = (props) => {
    return (
        <div>
            <form onChange={props.handleProjChange}>
                <input type="text" className="projectname" placeholder='Project Name'/>
                <p></p>
                <input type="text" className="description" placeholder='Description'/>
                <p></p>
                <button onClick={props.onAddProj}>Add</button>
                <button>Delete</button>

            </form>
        </div>        
    )
}

export default Project;