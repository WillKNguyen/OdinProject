export default function createTask(task, currentProject){
    const tasklist = document.querySelector('.tasklist');
    
    const taskElement = document.createElement('div');
    taskElement.className = 'task';
  
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
    taskPriority.value = task.getPriority();

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
    taskProject.innerHTML = currentProject.getName();

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.addEventListener('click', function(e){
        taskElement.innerHTML = "";
        currentProject.removeTaskFromProject(task);
        console.log(currentProject.getTaskList());
    });

    taskElement.appendChild(taskName);
    taskElement.appendChild(taskPriority);
    taskElement.appendChild(taskProject);
    taskElement.appendChild(taskDate);
    taskElement.appendChild(deleteBtn);

    tasklist.appendChild(taskElement);
}