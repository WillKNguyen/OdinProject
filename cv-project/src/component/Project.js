import React from 'react';

const Project = () => {
    return (
        <div>
            <h3>Project</h3>
            <form>
                <input type="text" id="projectname" placeholder='Project Name'/>
                <p></p>
                <input type="text" id="description" placeholder='Description'/>
                <p></p>
                <button>Add</button>
                <button>Delete</button>

            </form>
        </div>        
    )
}

export default Project;