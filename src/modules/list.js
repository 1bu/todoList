import { renderTodo } from "./todo";
import { initialSetup, save, load, saveListId } from "./localStorageManager";

export let projectList = [];

let selectedProject = null;

initialSetup();
projectList = load();

function loadList(){
    //Task List Container
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');

    //Task List Header
    const projectListHeader = document.createElement('div');
    projectListHeader.classList.add('project-list');
    
    const projectTitle = document.createElement('h2');
    projectTitle.innerText = 'Projects';

    const addListItem = document.createElement('button');
    addListItem.classList.add('add-list-item');
    addListItem.setAttribute('project-data','button');
    addListItem.textContent = '+';

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

export function renderProjects(){
    const projectElements = document.querySelector('.task-list');
    projectElements.innerHTML = '';

    projectList.forEach(project =>{
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
        listItemEdit.textContent = 'Edit';

        const listItemDelete = document.createElement('button');
        listItemDelete.classList.add('task-delete');
        listItemDelete.textContent = 'x';

        listItemDelete.addEventListener('click', ()=>{
            deleteProject(project);
        })

        listItem.addEventListener('click', ()=>{
            setSelectedProjectId(project);
            renderTodo();
        })

        listItemOption.appendChild(listItemEdit);
        listItemOption.appendChild(listItemDelete);
    
        listItem.appendChild(listItemTitle);
        listItem.appendChild(listItemOption);

        projectElements.appendChild(listItem);        
    })
    
}

export function saveAndRender(){
    renderProjects()
    save(projectList);
}

export function addProject(project){
    projectList.push(project);
    saveAndRender();
}

export function deleteProject(project){
    projectList = projectList.filter(item => item.id != project.id);
    saveAndRender();
}

export function setSelectedProjectId(project){
    selectedProject = project.id;
    saveListId();
}

export function getSelectedProjectId(){
    return selectedProject;
}

export default loadList;