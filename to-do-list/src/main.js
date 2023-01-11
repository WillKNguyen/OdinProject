import createTask from "./createTask.js";
import createProject from "./createProject.js";
import taskFactory from "./taskFactory.js";
import projectFactory from "./projectFactory.js";


let defaultProject = projectFactory('Default')
let container = {};
container.currentProject = defaultProject;
container.newProject = null;
container.task = null;

let projectList = [];
projectList.push(defaultProject);
if (localStorage.getItem('projectList') !== null) {
    let oldProjectList = JSON.parse(localStorage.getItem('projectList'));
    for (let i = 0; i < oldProjectList.length; i++) {
        if (oldProjectList[i].name != 'Default') {
            addProject(oldProjectList[i].name);
        }

        let task = oldProjectList[i].taskList;
        for (let j = 0; j < task.length; j++) {
            addTask(task[j].name, task[j].priority, task[j].date);
        }
    }
}

localStorage.setItem('projectList', JSON.stringify(projectList));

function addProject(projName){
    let project = projectFactory(projName);
    projectList.push(project);
    container.newProject = project;
    createProject(project, container, projectList);
    localStorage.setItem('projectList', JSON.stringify(projectList));
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


function addTask(taskName, taskPriority = "Medium", taskdate = ""){
    let task = taskFactory(taskName, taskPriority, taskdate);
    container.currentProject.addTaskToProject(task);
    container.task = task;
    createTask(container.task, container.currentProject, projectList);
    localStorage.setItem('projectList', JSON.stringify(projectList));
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
    container.currentProject = defaultProject;
    tasklist.innerHTML = "";
    const projectName = document.createElement('h3');
    projectName.innerHTML = "Inbox";
    tasklist.appendChild(projectName);
    let list = defaultProject.taskList;
    for (let i = 0; i < list.length; i++) {
        createTask(list[i], defaultProject, projectList);
    }
})
inbox.click();

const today = document.querySelector('#today');
today.addEventListener('click', function(){
    tasklist.innerHTML = "";

    const projectName = document.createElement('h3');
    projectName.innerHTML = "Today";
    tasklist.appendChild(projectName);

    let today = new Date().toISOString().slice(0, 10)
    for (let i = 0; i < projectList.length; i++) {
        let tasklist = projectList[i].taskList;
        for (let j = 0; j < tasklist.length; j++) {
            if (tasklist[j].date == today) {
                createTask(tasklist[j], projectList[i], projectList);
            }
        }
    }
})

const week = document.querySelector('#week');
week.addEventListener('click', function(){
    tasklist.innerHTML = "";

    const projectName = document.createElement('h3');
    projectName.innerHTML = "This Week";
    tasklist.appendChild(projectName);

    let nextweek = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
    for (let i = 0; i < projectList.length; i++) {
        let tasklist = projectList[i].taskList;
        for (let j = 0; j < tasklist.length; j++) {
            if (tasklist[j].date <= nextweek && !tasklist[j].date == "") {
                createTask(tasklist[j], projectList[i], projectList);
            }
        }
    }
})
