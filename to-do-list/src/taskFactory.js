export default function taskFactory (taskName, projectName) {
    let name = taskName;
    let date = "No due date";
    let priority = "Medium";

    const getName = () => name;
    const getPriority = () => priority;
    const getDate = () => date;
    const getProject = () => projectName.getName();

    const setDate = (newdate) => {date = newdate};
    const setName = (newname) => {name = newname};
    const setPriority = (newpriority) => {priority = newpriority};

    return{getDate, setDate, setPriority, setName, getName, getPriority, getProject}
}