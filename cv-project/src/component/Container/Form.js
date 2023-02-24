import React from 'react';
import Education from '../Education';
import Experience from '../Experience';
import Personal from '../Personal';
import Project from '../Project';

function Form({expList, projList, eduList,
    handlePersonalDetailsChange, handleExpChange, handleProjChange, handleEduChange,
    onAddExp, onAddProj, onAddEdu}) {
    return (
        <div className='input'>
            <Personal handlePersonalDetailsChange={handlePersonalDetailsChange}/>

            <h3>Work Experience</h3>
            {expList.length < 1 ? (
                <button onClick={onAddExp}>Add</button>
            ) : (
                expList.map((item,index) => {
                    return(
                        <Experience key={index} handleExpChange={handleExpChange} onAddExp={onAddExp}/>
                    )
                })
            )}

            <h3>Project</h3>
            {projList.length < 1 ? (
                <button onClick={onAddProj}>Add</button>
            ) : (
                projList.map((item,index) => {
                    return(
                        <Project key={index} handleProjChange={handleProjChange} onAddProj={onAddProj}/>
                    )
                })
            )}

            <h3>Education</h3>
            {eduList.length < 1 ? (
                <button onClick={onAddEdu}>Add</button>
            ) : (
                eduList.map((item,index) => {
                    return(
                        <Education key={index} handleEduChange={handleEduChange} onAddEdu={onAddEdu}/>
                    )
                })
            )}
        </div>
    )
}

export default Form