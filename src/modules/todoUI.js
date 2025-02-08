import add from '../asset/plus-solid.svg';
import trash from '../asset/trash-solid.svg';
import {getProjectId, deleteTodo,checkedTodo} from './todo';

export function loadTodoUI(){
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todo-container');
    
    const todoHeader = document.createElement('div');
    todoHeader.classList.add('todo-header');

    const taskTitleHeader = document.createElement('h2');
    taskTitleHeader.classList.add('project-title');
    taskTitleHeader.textContent = updateTodoHeader();

    const addTodoBtn = document.createElement('button');
    addTodoBtn.classList.add('add-icon');
    addTodoBtn.setAttribute('data-open', 'button');
    addTodoBtn.innerHTML = `<img src="${add}" alt="delete-icon">`;

    const todoElements = document.createElement('div');
    todoElements.classList.add('todo-elements');
 
    //////Todo Container////////
    todoHeader.appendChild(taskTitleHeader);
    todoHeader.appendChild(addTodoBtn);

    todoContainer.appendChild(todoHeader);
    todoContainer.appendChild(todoElements);

    return todoContainer;
}

export function renderTodoUI(){
        const todoElements = document.querySelector('.todo-elements');
        todoElements.innerHTML = '';
    
        let selectedProject = getProjectId();
        
        if(selectedProject){
            selectedProject.todos.forEach(todo =>{
                const todoItem = document.createElement('div');
                todoItem.classList.add('todo');
                todoItem.setAttribute(['data-todo'], todo.id);
                todoItem.style.borderColor = changeColor(todo.priority);
        
                const todoCheck = document.createElement('input');
                todoCheck.setAttribute('type', 'checkbox'); 
                todoCheck.checked = todo.completed;
                
                const todoText = document.createElement('div');
                todoText.classList.add('todo-text');
        
                const todoTextHeader = document.createElement('div');
                todoTextHeader.classList.add('todo-text-header');

                const todoTitle = document.createElement('h3');
                todoTitle.textContent = todo.name;

                const todoDate = document.createElement('p');
                todoDate.textContent = `${todo.dueDate}`;

                const todoDescription = document.createElement('p');
                todoDescription.textContent = todo.description;
                
                const todoDelete = document.createElement('button');
                todoDelete.classList.add('icon-delete');
                todoDelete.innerHTML = `<img src="${trash}" alt="delete-icon">`;
        
                todoDelete.addEventListener('click', ()=>{
                    deleteTodo(todo);
                })
        
                todoCheck.addEventListener('click',()=>{
                    checkedTodo(todo);
                })
            
                todoItem.appendChild(todoCheck);
                todoItem.appendChild(todoText);
                todoItem.appendChild(todoDelete);
            
                todoTextHeader.appendChild(todoTitle);
                todoTextHeader.appendChild(todoDate);

                todoText.appendChild(todoTextHeader);
                todoText.appendChild(todoDescription);
            
                todoElements.appendChild(todoItem);
            })
        }
}


export function updateTodoHeader() {
    const taskTitleHeader = document.querySelector('.project-title');
    const selectedProject = getProjectId();

    if (taskTitleHeader) {
        taskTitleHeader.textContent = selectedProject ? selectedProject.name : '';
    }
}


export function changeColor(priority){
    const colors ={ 
        'low-priority': '#1E8252',
        'medium-priority': '#EDAA25',
        'high-priority': '#C43302'
    }
    return colors[priority];
}