import React from 'react';

const Experience = (props) => {
    return (
        <div>
            <form onChange={props.handleArrayChange('expList', props.index)}>
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
                <button type='button' onClick={props.onAddExp}>Add</button>
                <button type='button' onClick={() => props.onDelete('expList', props.id)}>Delete </button>

            </form>
        </div>        
    )
}

// function Experience({index, })

export default Experience;