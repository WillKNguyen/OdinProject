export default function createTask(task){
    const tasklist = document.querySelector('.tasklist');
    
    const taskElement = document.createElement('div');
    taskElement.className = 'task';

    const taskTopBar = document.createElement('div');
    taskTopBar.className = 'task-top-bar';
  
    //option to change task name
    const taskName = document.createElement('input');
    taskName.type = 'text';
    taskName.value = task.getName();
    taskName.addEventListener('change', function(e){
        task.setName(taskName.value);
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
    taskPriority.addEventListener('change', function(e){
        task.setPriority(taskPriority.value);
    })

    //option to change task deadline
    const taskDate = document.createElement('input');
    taskDate.type = 'date';
    taskDate.value = task.getDate();
    taskDate.addEventListener('change', function(e){
        task.setDate(taskDate.value);   
    })

    const taskProject = document.createElement('div');
    taskProject.innerHTML = task.getProject();

    taskTopBar.appendChild(taskName);
    taskTopBar.appendChild(taskPriority);
    taskTopBar.appendChild(taskProject);
    taskTopBar.appendChild(taskDate);
    taskElement.appendChild(taskTopBar);

    tasklist.appendChild(taskElement);
}