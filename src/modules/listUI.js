import {setSelectedProjectId, deleteProject, updateProjectName} from './list'
import { renderTodoUI, updateTodoHeader } from "./todoUI";
import trash from '../asset/trash-solid.svg';
import edit from '../asset/pen-to-square-solid.svg'
import add from '../asset/plus-solid.svg'

export function loadListUI(){
    //Task List Container
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');

    //Task List Header
    const projectListHeader = document.createElement('div');
    projectListHeader.classList.add('project-list');
    
    const projectTitle = document.createElement('h2');
    projectTitle.innerText = 'Projects';

    const addListItem = document.createElement('button');
    addListItem.classList.add('add-icon');
    addListItem.setAttribute('project-data','button');
    addListItem.innerHTML = `<img src="${add}" alt="add-icon">`;

    //Task Container
    const list = document.createElement('div');
    list.classList.add('task-list');


    //////Task List Container///////
    projectListHeader.appendChild(projectTitle);
    projectListHeader.appendChild(addListItem);

    projectContainer.appendChild(projectListHeader);
    projectContainer.appendChild(list);    

    return projectContainer;
}

export function renderProjectsUI(projects){
    const projectElements = document.querySelector('.task-list');
    projectElements.innerHTML = '';

    projects.forEach(project =>{
        //Task Element
        const listItem = document.createElement('div');
        listItem.classList.add('task');
        listItem.setAttribute('data-project', project.id);

        const listItemTitle = document.createElement('h3');
        listItemTitle.textContent = project.name;

        //Task Options
        const listItemOption = document.createElement('div');
        listItemOption.classList.add('task-option');

        const listItemEdit = document.createElement('button');
        listItemEdit.classList.add('list-edit');
        listItemEdit.innerHTML = `<img src="${edit}" alt="edit-icon">`;

        const listItemDelete = document.createElement('button');
        listItemDelete.classList.add('icon-delete');
        listItemDelete.innerHTML = `<img src="${trash}" alt="delete-icon">`;


        listItemDelete.addEventListener('click', (e)=>{
            e.stopPropagation();
        
            deleteProject(project);
            updateTodoHeader()
        })

        listItem.addEventListener('click', (e)=>{
            e.stopPropagation();
            setSelectedProjectId(project);
            updateTodoHeader()
            renderTodoUI();
           
        })

        listItemEdit.addEventListener('click',(e)=>{
            e.stopPropagation();

            enableProjectEditing(listItemTitle, project);
        })

        listItemOption.appendChild(listItemEdit);
        listItemOption.appendChild(listItemDelete);
    
        listItem.appendChild(listItemTitle);
        listItem.appendChild(listItemOption);

        projectElements.appendChild(listItem);        
    })
    renderTodoUI();
}

function enableProjectEditing(titleElement, project) {
    const input = document.createElement('input');
    input.type = 'text';
    input.value = project.name;
    input.classList.add('edit-project-input');

    titleElement.replaceWith(input);
    input.focus();

    // Guardar cambios al presionar "Enter" o perder el foco
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            saveProjectName(input, titleElement, project);
        }
    });

    input.addEventListener('blur', () => {
        saveProjectName(input, titleElement, project);
    });
}

function saveProjectName(input, titleElement, project) {
    const newName = input.value.trim();

    if (newName !== '') {
        updateProjectName(project.id, newName);
        titleElement.textContent = newName;
    }

    input.replaceWith(titleElement);
}