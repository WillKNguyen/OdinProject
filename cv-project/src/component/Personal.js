import React from 'react';

const Personal = (props) => {
    return (
        <div>
            <h3>Personal Details</h3>
            <form onChange={props.handlePersonalDetailsChange}>
                <input type="text" id="firstname" placeholder='First Name'/>
                <p></p>
                <input type="text" id="lastname" placeholder='Last Name'/>
                <p></p>
                <input type="text" id="email" placeholder='Email'/>
                <p></p>
                <input type="number" id="phone" placeholder='Phone Number'/>
                <p></p>
                <input type="text" id="summary" placeholder='Summary'/>
            </form>
        </div>        
    )
}

export default Personal;