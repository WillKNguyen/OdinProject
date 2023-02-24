function ExperienceView({company, position, start, end, description}){
    return (
        <div>
            <h4>{position}</h4>
            <div>{company} <span> {start} - {end} </span> </div>
            <div> {description}</div>
        </div>
    )
}

export default ExperienceView