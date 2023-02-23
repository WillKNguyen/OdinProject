import React from 'react';

const Experience = () => {
    return (
        <div>
            <h3>Work Experience</h3>
            <form>
                <input type="text" id="company" placeholder='Company'/>
                <p></p>
                <input type="text" id="position" placeholder='Position'/>
                <p></p>
                <input type="date" id="start" placeholder='Start Date'/>
                <p></p>
                <input type="date" id="end" placeholder='End Date'/>
                <p></p>
                <input type="text" id="description" placeholder='Description'/>
                <p></p>
                <button>Add</button>
                <button>Delete</button>

            </form>
        </div>        
    )
}

export default Experience;