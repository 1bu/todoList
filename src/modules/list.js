import { renderTodoUI } from "./todoUI";
import { initialSetup, save, load, saveListId, loadListId } from "./localStorageManager";
import { renderProjectsUI } from "./listUI";

export let projectList = [];
let selectedProject = null;

initialSetup();
projectList = load();

export function renderProjects(){
    renderProjectsUI(projectList);
}

export function saveAndRender(){
    save(projectList);
    renderProjects();
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

export function updateProjectName(projectId, newName) {
    const project = projectList.find(p => p.id === projectId);
    if (!project || newName.trim() === '') return;

    project.name = newName.trim();
    saveAndRender(); 
}
