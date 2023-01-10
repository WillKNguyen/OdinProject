export default function projectFactory (pname){
    let name = pname;
    let taskList = [];

    const getName = () => name;
    const setName = (newname) => {name = newname};
    const getTaskList = () => taskList;

    function addTaskToProject(task){
        taskList.push(task);
    };

    function removeTaskFromProject(task){
        let index = taskList.indexOf(task);
        if (index > -1){
            taskList.splice(index, 1);
        }
    };

    return {getName, setName, addTaskToProject, removeTaskFromProject, getTaskList}
};