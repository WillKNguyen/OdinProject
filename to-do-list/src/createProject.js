import createTask from "./createTask.js";

export default function createProject(project,container, projectList){
    const projectlist = document.querySelector('.projectlist');
    const projectContainer = document.createElement('div');
    const projectElement = document.createElement('div');
    projectElement.innerHTML = project.name;
    projectElement.addEventListener('click', function(e){
        const tasklist = document.querySelector('.tasklist');
        tasklist.innerHTML = "";

        const projectName = document.createElement('h3');
        projectName.innerHTML = project.name;

        
        tasklist.appendChild(projectName);

        let list = project.taskList;
        for (let i = 0; i < list.length; i++) {
            createTask(list[i], project, projectList);
        }
        container.newProject = project; 
        container.currentProject = container.newProject;
    });
    projectElement.click();
    
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'X';
    deleteBtn.style.backgroundColor = 'inherit';
    deleteBtn.style.border = 'none';
    deleteBtn.style.fontSize = 'inherit';

    deleteBtn.addEventListener('click', function(e){
        let index = projectList.indexOf(project);
        if (index > -1){
            projectList.splice(index, 1);
        }
        projectContainer.innerHTML = "";
        localStorage.setItem('projectList', JSON.stringify(projectList));
    })

    projectContainer.appendChild(projectElement);
    projectContainer.appendChild(deleteBtn);

    projectContainer.style.display = 'flex';
    projectContainer.style.justifyContent = 'space-between';
    projectContainer.style.alignItems = 'center';

    projectlist.appendChild(projectContainer);
}