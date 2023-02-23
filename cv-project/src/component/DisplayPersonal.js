import React from 'react';

const DisplayPersonal = (props) => {
    const {firstname, lastname, email, phone, summary} = props;
    return (
        <div>
            <div>{firstname}</div>
            <div>{lastname}</div>
            <div>{email}</div>
            <div>{phone}</div>
            <div>{summary}</div>
        </div>        
    )
}

export default DisplayPersonal;