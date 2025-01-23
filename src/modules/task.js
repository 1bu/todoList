function loadTask(){
    //Project Container
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');

    //Task List Container
    const projectListHeader = document.createElement('div');
    projectListHeader.classList.add('project-list');
    
    const projectTitle = document.createElement('h2');
    projectTitle.innerText = 'Task';

    const addTask = document.createElement('button');
    addTask.classList.add('add-task');
    addTask.textContent = '+';

    //Task Container
    const taskList = document.createElement('div');
    taskList.classList.add('task-list');

    //Task Element
    const task = document.createElement('div');
    task.classList.add('task');

    const taskTitle = document.createElement('h3');
    taskTitle.textContent = 'Task Title';

    //Task Options
    const taskOption = document.createElement('div');
    taskOption.classList.add('task-option');

    const taskEdit = document.createElement('button');
    taskEdit.classList.add('task-edit');
    taskEdit.textContent = 'Edit';

    const taskDelete = document.createElement('button');
    taskDelete.classList.add('task-delete');
    taskDelete.textContent = 'x'

    //////Task List Container///////
    taskOption.appendChild(taskEdit);
    taskOption.appendChild(taskDelete);

    task.appendChild(taskTitle);
    task.appendChild(taskOption);

    taskList.appendChild(task);

    projectListHeader.appendChild(projectTitle);
    projectListHeader.appendChild(addTask);

    projectContainer.appendChild(projectListHeader);
    projectContainer.appendChild(taskList);    

    return projectContainer;
}

export default loadTask;