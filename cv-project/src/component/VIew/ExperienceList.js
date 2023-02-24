import ExperienceView from "./ExperienceView";

function ExperienceList({heading, expList}){
    return (
        <div>
            <h3>{heading}</h3>
            {expList.map((item,index) => {
                const{company, position, start, end, description} = item;
                return (
                    <ExperienceView key={index}
                    company={company}
                    position={position}
                    start={start}
                    end={end}
                    description={description}
                    />
                )
            })}
        </div>
    )
}

export default ExperienceList