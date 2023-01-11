export default function taskFactory (taskName, taskPriority, taskdate) {
    let name = taskName;
    let date = taskdate;
    let priority = taskPriority;
    return{name, priority, date}
}