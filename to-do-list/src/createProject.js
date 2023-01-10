import createTask from "./createTask.js";

export default function createProject(project,container){
    const projectlist = document.querySelector('.projectlist');

    const projectElement = document.createElement('div');
    projectElement.innerHTML = project.getName();
    projectElement.addEventListener('click', function(){
        const tasklist = document.querySelector('.tasklist');
        tasklist.innerHTML = "";
        let list = project.getTaskList();
        for (let i = 0; i < list.length; i++) {
            createTask(list[i]);
        }
        container.currentProject = container.newProject;
        console.log(container.currentProject.getName());
    });

    projectlist.appendChild(projectElement);
}