import ProjectView from "./ProjectView";


function ProjectList({heading, projList}){
    return (
        <div>
            <h3>{heading}</h3>
            {projList.map((item,index) => {
                const{projectname, description} = item;
                return (
                    <ProjectView key={index}
                    projectname={projectname}
                    description={description}
                    />
                )
            })}
        </div>
    )
}

export default ProjectList