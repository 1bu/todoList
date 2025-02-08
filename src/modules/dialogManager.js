import { addProject } from './list.js'
import  { addTodo } from './todo.js';

export function initDialogEvent(){

    document.addEventListener('click',(e)=>{
        const projectBtn = e.target.closest('[project-data]');
        const openBtn = e.target.closest('[data-open]');
        const closeBtn = e.target.closest('.dialog-close');
        
        if(openBtn) document.querySelector('.todo-dialog').showModal();
        if(projectBtn) document.querySelector('.project-dialog').showModal();
        if(closeBtn) closeBtn.closest('dialog').close();
    })

    handleProjectForm();
    handleTodoForm();
}

function handleProjectForm(){
    const projectContainer = document.querySelector('.project-dialog');
    const projectForm = projectContainer.querySelector('form');
    console.log('estoy en handleproject')

    projectForm.addEventListener('submit',(e)=>{
        e.preventDefault();
            
        const newProject = {
                id: new Date().getTime(),
                name: document.getElementById('project-name').value.trim(),
                todos: []
            };

        addProject(newProject)
        projectContainer.close();
        projectForm.reset();
    })
}

function handleTodoForm(){
    const todoDialog = document.querySelector('.todo-dialog');
    const todoForm = todoDialog.querySelector('form');
    console.log(todoForm)

    todoForm.addEventListener('submit',(e)=>{
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            name: document.getElementById('todo-name').value.trim(),
            description: document.getElementById('todo-description').value.trim(),
            dueDate: document.getElementById('todo-dueDate').value,
            priority: document.getElementById('todo-priority').value,
        }
        addTodo(newTodo);
        todoDialog.close();
        todoForm.reset();

    })
}