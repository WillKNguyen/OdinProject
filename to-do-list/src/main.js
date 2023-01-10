import createTask from "./createTask.js";
import createProject from "./createProject.js";
import taskFactory from "./taskFactory.js";
import projectFactory from "./projectFactory.js";

// let defaultProject = null;
let defaultProject = projectFactory('Default')
let projectList = [];
projectList.push(defaultProject);
//pull data from localstorage

// if (localStorage.getItem('projectList') !== undefined) {
//     projectList = JSON.parse(localStorage.getItem('projectList') || "[]");
//     for (let i = 0; i < projectList.length; i++) {
//         if (projectList[i].getName() == 'Default') {
//             defaultProject = projectList[i];
//             continue;
//         }

//     }
// }
// else{
//     defaultProject = projectFactory('Default');
//     projectList.push(defaultProject);
//     localStorage.setItem('projectList', JSON.stringify([projectList]));
// }

let container = {};
container.currentProject = defaultProject;
container.newProject = null;

function addProject(projName){
    let project = projectFactory(projName);
    projectList.push(project);
    container.newProject = project;
    createProject(project, container);
}
const openAddProjBtn = document.querySelector('.openAddProj');
const projPrompt = document.querySelector('.projPrompt');
const projname = document.querySelector('#projname');


openAddProjBtn.addEventListener('click', function(e) {
    projname.value = "";
    showPrompt(projPrompt, openAddProjBtn);
})

const addProjBtn = document.querySelector('.addProjBtn');
addProjBtn.addEventListener('click', function(e) {
    let projName = document.querySelector('#projname').value;
    if (projName.length > 0){
        addProject(projName);
        hidePrompt(projPrompt, openAddProjBtn);
    }
    else{
        alert('Please enter a project name');
    }
})

const cancelProjBtn = document.querySelector('.cancelProjBtn');
cancelProjBtn.addEventListener('click', function(){
    hidePrompt(projPrompt, openAddProjBtn);
})


function addTask(taskName){
    let task = taskFactory(taskName);
    container.currentProject.addTaskToProject(task);
    createTask(task, container.currentProject);
    console.log(container.currentProject.getTaskList());
}

const openAddTaskBtn = document.querySelector('.openAddTask');
const taskPrompt = document.querySelector('.taskPrompt');
const taskname = document.querySelector('#taskname');

openAddTaskBtn.addEventListener('click', function(e) {
    taskname.value = "";
    showPrompt(taskPrompt, openAddTaskBtn);
});

const addTaskBtn = document.querySelector('.addTaskBtn');

addTaskBtn.addEventListener('click', function(e) {
    let taskName = document.querySelector('#taskname').value;
    if (taskName.length > 0){
        addTask(taskName);
        hidePrompt(taskPrompt, openAddTaskBtn);
    }
    else{
        alert('Please enter a task name');
    }
})

const cancelTaskBtn = document.querySelector('.cancelTaskBtn');
cancelTaskBtn.addEventListener('click', function(){
    hidePrompt(taskPrompt, openAddTaskBtn);
})

function showPrompt(prompt, openBtn){
    prompt.style.display = 'block';
    openBtn.style.display = 'none';
}

function hidePrompt(prompt, openBtn){
    prompt.style.display = 'none';
    openBtn.style.display = 'block';
}


const tasklist = document.querySelector('.tasklist');
const inbox = document.querySelector('#inbox');

inbox.addEventListener('click', function(e) {
    container.newProject = defaultProject;
        tasklist.innerHTML = "";
        let list = defaultProject.getTaskList();
        for (let i = 0; i < list.length; i++) {
            createTask(list[i], defaultProject);
        }
        container.newProject = defaultProject; 
        container.currentProject = container.newProject;
})

const today = document.querySelector('#today');
today.addEventListener('click', function(){
    tasklist.innerHTML = "";
    let today = new Date().toISOString().slice(0, 10)
    for (let i = 0; i < projectList.length; i++) {
        let tasklist = projectList[i].getTaskList();
        for (let j = 0; j < tasklist.length; j++) {
            if (tasklist[j].getDate() == today) {
                createTask(tasklist[j], projectList[i]);
            }
        }
    }
})

const week = document.querySelector('#week');
week.addEventListener('click', function(){
    tasklist.innerHTML = "";
    let nextweek = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
    for (let i = 0; i < projectList.length; i++) {
        let tasklist = projectList[i].getTaskList();
        for (let j = 0; j < tasklist.length; j++) {
            if (tasklist[j].getDate() <= nextweek) {
                createTask(tasklist[j], projectList[i]);
            }
        }
    }
})
