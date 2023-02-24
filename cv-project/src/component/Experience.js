import React from 'react';

const Experience = (props) => {
    return (
        <div>
            <form onChange={props.handleExpChange}>
                <input type="text" className="company" placeholder='Company'/>
                <p></p>
                <input type="text" className="position" placeholder='Position'/>
                <p></p>
                <input type="date" className="start" placeholder='Start Date'/>
                <p></p>
                <input type="date" className="end" placeholder='End Date'/>
                <p></p>
                <input type="text" className="description" placeholder='Description'/>
                <p></p>
                <button onClick={props.onAddExp}>Add</button>
                <button>Delete</button>

            </form>
        </div>        
    )
}

export default Experience;