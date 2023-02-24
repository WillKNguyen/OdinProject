function EducationView({school, degree, start, end}){
    return (
        <div>
            <h4>{degree}</h4>
            <div>{school} <span> {start} - {end} </span> </div>
        </div>
    )
}

export default EducationView