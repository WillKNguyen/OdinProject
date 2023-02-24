function ProjectView({projectname, description}){
    return (
        <div>
            <h4>{projectname}</h4>
            <div> {description}</div>
        </div>
    )
}

export default ProjectView