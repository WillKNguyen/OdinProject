import createTask from "./createTask.js";

export default function createProject(project,container){
    const projectlist = document.querySelector('.projectlist');

    const projectElement = document.createElement('div');
    projectElement.innerHTML = project.getName();
    projectElement.addEventListener('click', function(e){
        const tasklist = document.querySelector('.tasklist');
        tasklist.innerHTML = "";
        let list = project.getTaskList();
        for (let i = 0; i < list.length; i++) {
            createTask(list[i], project);
        }
        container.newProject = project; 
        container.currentProject = container.newProject;
    });

    projectlist.appendChild(projectElement);
}