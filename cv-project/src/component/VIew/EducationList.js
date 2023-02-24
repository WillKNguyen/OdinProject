import EducationView from "./EducationView";


function EducationList({heading, eduList}){
    return (
        <div>
            <h3>{heading}</h3>
            {eduList.map((item,index) => {
                const{school, degree, start, end} = item;
                return (
                    <EducationView key={index}
                    school={school}
                    degree={degree}
                    start={start}
                    end={end}
                    />
                )
            })}
        </div>
    )
}

export default EducationList