import React from 'react';

const Education = () => {
    return (
        <div>
            <h3>Education</h3>
            <form>
                <input type="text" id="school" placeholder='School'/>
                <p></p>
                <input type="text" id="degree" placeholder='Degree'/>
                <p></p>
                <input type="date" id="start" placeholder='Start Date'/>
                <p></p>
                <input type="date" id="end" placeholder='End Date'/>
                <p></p>
                <button>Add</button>
                <button>Delete</button>

            </form>
        </div>        
    )
}

export default Education;