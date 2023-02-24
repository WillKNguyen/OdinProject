import React from 'react';

const Education = (props) => {
    return (
        <div>
            <form onChange={props.handleArrayChange('eduList', props.index)}>
                <input type="text" className="school" placeholder='School'/>
                <p></p>
                <input type="text" className="degree" placeholder='Degree'/>
                <p></p>
                <input type="date" className="start" placeholder='Start Date'/>
                <p></p>
                <input type="date" className="end" placeholder='End Date'/>
                <p></p>
                <button type='button' onClick={props.onAddEdu}>Add</button>
                <button type='button' onClick={() => props.onDelete('eduList', props.id)}>Delete</button>

            </form>
        </div>        
    )
}

export default Education;