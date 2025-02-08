import { projectList, getSelectedProjectId, saveAndRender} from './list';
import { save, loadListId } from './localStorageManager';

//let todoList = [];

export function addTodo(todo){
    const projects = getProjectId();

    if(projects === null) return;

    if(projects){
        projects.todos.push(todo);
        saveAndRender();
    }
}

export function deleteTodo(todo){
    const projects = getProjectId()
    console.log('delete',getProjectId());

    if(projects === null) return;

    projects.todos = projects.todos.filter(item => item.id !== todo.id);
    saveAndRender();
}

export function checkedTodo(todo){
    const selectedProjects = getProjectId()

    if(selectedProjects === null) return;

    const projects = selectedProjects.todos.find(todoList => todoList.id === todo.id);
    if(projects){
        projects.completed = !todo.completed;
        save();
        saveAndRender();
    }
}

export function getProjectId(){
    return projectList.find(project => project.id === loadListId()) || null;
    
    /*let selectedProject = projectList.find(project => project.id === loadListId())
        if(!selectedProject) return null

    return selectedProject;
    */
}
