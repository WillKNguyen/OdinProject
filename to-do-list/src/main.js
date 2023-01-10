import createTask from "./createTask.js";
import createProject from "./createProject.js";
import taskFactory from "./taskFactory.js";
import projectFactory from "./projectFactory.js";

let defaultProject = projectFactory('Default');
//add if else to pull from localstorage

let container = {};
container.currentProject = defaultProject;
container.newProject = null;


function addTask(taskName){
    let task = taskFactory(taskName, container.currentProject);
    createTask(task);
}

const openAddTaskBtn = document.querySelector('.openAddTask');
const taskPrompt = document.querySelector('.taskPrompt');

openAddTaskBtn.addEventListener('click', function(e) {
    // addTask();
    taskPrompt.style.display = 'block';
    openAddTaskBtn.style.display = 'none';
});

const addTaskBtn = document.querySelector('.addTaskBtn');

addTaskBtn.addEventListener('click', function(e) {
    let taskName = document.querySelector('#taskname').value;
    if (taskName.length > 0){
        addTask(taskName);
        taskPrompt.style.display = 'none';
        openAddTaskBtn.style.display = 'block';
    }
    else{
        alert('Please enter a task name');
    }
})

function addProject(projName){
    let project = projectFactory(projName);
    container.newProject = project
    createProject(project, container);
}
const openAddProjBtn = document.querySelector('.openAddProj');
const projPrompt = document.querySelector('.projPrompt');

openAddProjBtn.addEventListener('click', function(e) {
    projPrompt.style.display = 'block';
    openAddProjBtn.style.display = 'none';
})

const addProjBtn = document.querySelector('.addProjBtn');
addProjBtn.addEventListener('click', function(e) {
    let projName = document.querySelector('#projname').value;
    if (projName.length > 0){
        addProject(projName);
        projPrompt.style.display = 'none';
        openAddProjBtn.style.display = 'block';
    }
    else{
        alert('Please enter a project name');
    }
})


