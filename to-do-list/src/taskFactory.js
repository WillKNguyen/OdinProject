export default function taskFactory (taskName) {
    let name = taskName;
    let date = "";
    let priority = "Medium";

    const getName = () => name;
    const getPriority = () => priority;
    const getDate = () => date;

    const setDate = (newdate) => {date = newdate};
    const setName = (newname) => {name = newname};
    const setPriority = (newpriority) => {priority = newpriority};

    return{name, getDate, setDate, setPriority, setName, getName, getPriority}
}