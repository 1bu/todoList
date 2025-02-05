import { projectList, getSelectedProjectId} from './list';
import { save, loadListId } from './localStorageManager';

//let todoList = [];

export default function loadTodo(){
    //Todo Container
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todo-container');
    
    const todoHeader = document.createElement('div');
    todoHeader.classList.add('todo-header');

    const taskTitleHeader = document.createElement('h2');
    taskTitleHeader.textContent = 'Task';

    const addTodoBtn = document.createElement('button');
    addTodoBtn.classList.add('add-todo');
    addTodoBtn.setAttribute('data-open', 'button');
    addTodoBtn.textContent = '+';

    const todoElements = document.createElement('div');
    todoElements.classList.add('todo-elements');
 
    //////Todo Container////////
    todoHeader.appendChild(taskTitleHeader);
    todoHeader.appendChild(addTodoBtn);

    todoContainer.appendChild(todoHeader);
    todoContainer.appendChild(todoElements);

    return todoContainer;
}

export function renderTodo(){
    const todoElements = document.querySelector('.todo-elements');
    todoElements.innerHTML = '';

    let selectedProject = projectList.find(project => project.id === getSelectedProjectId());
    if (!selectedProject){
        selectedProject = projectList.find(project => project.id === loadListId())
        if(!selectedProject) return null
    };
    
    selectedProject.todos.forEach(todo =>{
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo');
        todoItem.setAttribute(['data-todo'], todo.id);

        const todoCheck = document.createElement('input');
        todoCheck.setAttribute('type', 'checkbox'); 
        todoCheck.checked = todo.completed;
        
        const todoText = document.createElement('div');
        todoText.classList.add('todo-text');

        const todoTitle = document.createElement('h3');
        todoTitle.textContent = todo.name;
        
        const todoDate = document.createElement('p');
        todoDate.textContent = `Due Date: ${todo.dueDate}`;

        const todoDelete = document.createElement('button');
        todoDelete.classList.add('todo-delete');
        todoDelete.textContent = 'x';

        todoDelete.addEventListener('click', ()=>{
            deleteTodo(todo);
        })

        todoCheck.addEventListener('click',(e)=>{
            checkedTodo(e,selectedProject,todo);
        })
    
        todoItem.appendChild(todoCheck);
        todoItem.appendChild(todoText);
        todoItem.appendChild(todoDelete);
    
        todoText.appendChild(todoTitle);
        todoText.appendChild(todoDate);
    
        todoElements.appendChild(todoItem);
    })
    
    save();
}

export function addTodo(todo){
    const projects = projectList.find(project => project.id === getSelectedProjectId());

    if(getSelectedProjectId() === null) return;

    if(projects){
        projects.todos.push(todo);
        renderTodo();
    }
}

export function deleteTodo(todo){
    const projects = projectList.find(project => project.id === getSelectedProjectId());
    projects.todos = projects.todos.filter(item => item.id !== todo.id);
    renderTodo();
}

export function checkedTodo(ev,project,todo){
    if(ev.target.tagName === 'INPUT'){
        const selectedTodo = project.todos.find(todoList => todoList.id === todo.id);
        selectedTodo.completed = ev.target.checked;
        save()
    };
}

