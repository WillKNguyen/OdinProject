import React from 'react';
import Education from '../Education';
import Experience from '../Experience';
import Personal from '../Personal';
import Project from '../Project';

function Form({expList, projList, eduList,
    handlePersonalDetailsChange, handleArrayChange,
    onAddExp, onAddProj, onAddEdu, onDelete}) {
    return (
        <div className='input'>
            <Personal handlePersonalDetailsChange={handlePersonalDetailsChange}/>

            <h3>Work Experience</h3>
            {expList.length < 1 ? (
                <button onClick={onAddExp}>Add</button>
            ) : (
                expList.map((item,index) => {
                    return(
                        <Experience key={index} id={item.id}  index={index} handleArrayChange={handleArrayChange} onAddExp={onAddExp} onDelete={onDelete}/>
                    )
                })
            )}

            <h3>Project</h3>
            {projList.length < 1 ? (
                <button onClick={onAddProj}>Add</button>
            ) : (
                projList.map((item,index) => {
                    return(
                        <Project key={index} id={item.id} index={index} handleArrayChange={handleArrayChange} onAddProj={onAddProj} onDelete={onDelete}/>
                    )
                })
            )}

            <h3>Education</h3>
            {eduList.length < 1 ? (
                <button onClick={onAddEdu}>Add</button>
            ) : (
                eduList.map((item,index) => {
                    return(
                        <Education key={index} id={item.id} index={index} handleArrayChange={handleArrayChange} onAddEdu={onAddEdu} onDelete={onDelete}/>
                    )
                })
            )}
        </div>
    )
}

export default Form