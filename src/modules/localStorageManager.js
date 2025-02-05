import { projectList, getSelectedProjectId } from "./list";

const STORAGE_KEY = 'projects'
const STORAGE_KEY_LIST_ID ='list-id'

export function initialSetup(){
    if(!localStorage.getItem(STORAGE_KEY)){
        localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    }
}

export function save(){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projectList));
}

export function saveListId(){
    localStorage.setItem(STORAGE_KEY_LIST_ID, JSON.stringify(getSelectedProjectId()))
}

export function load(){
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function loadListId(){
    return JSON.parse(localStorage.getItem(STORAGE_KEY_LIST_ID)) || null;
}