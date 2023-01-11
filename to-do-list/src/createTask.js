export default function createTask(task, currentProject, projectList){
    const tasklist = document.querySelector('.tasklist');
    
    const taskElement = document.createElement('div');
    taskElement.className = 'task';
  
    //option to change task name
    const taskName = document.createElement('input');
    taskName.type = 'text';
    taskName.value = task.name;
    taskName.addEventListener('change', function(e){
        task.name = taskName.value;
        localStorage.setItem('projectList', JSON.stringify(projectList));
    })

    //option to change priority
    const taskPriority = document.createElement('select');
    let priorities =['Low', 'Medium', 'High'];
    for (let i = 0; i < priorities.length; i++){
        let option = document.createElement('option');
        option.value = priorities[i];
        option.innerText = priorities[i];
        taskPriority.appendChild(option);
    }
    taskPriority.value = task.priority;


    taskPriority.addEventListener('change', function(e){
        task.priority = taskPriority.value;
        localStorage.setItem('projectList', JSON.stringify(projectList));
    })

    //option to change task deadline
    const taskDate = document.createElement('input');
    taskDate.type = 'date';
    taskDate.value = task.date;
    taskDate.addEventListener('change', function(e){
        task.date = taskDate.value;   
        localStorage.setItem('projectList', JSON.stringify(projectList));
    })

    const taskProject = document.createElement('div');
    taskProject.innerHTML = currentProject.name;

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.addEventListener('click', function(e){
        taskElement.innerHTML = "";
        currentProject.removeTaskFromProject(task);
        localStorage.setItem('projectList', JSON.stringify(projectList));
    });

    taskElement.appendChild(taskName);
    taskElement.appendChild(taskPriority);
    taskElement.appendChild(taskProject);
    taskElement.appendChild(taskDate);
    taskElement.appendChild(deleteBtn);
    tasklist.appendChild(taskElement);
}