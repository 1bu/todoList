import './style.css';
import {renderProjects} from './modules/list';
import { loadListUI } from './modules/listUI';
import {loadTodoUI, updateTodoHeader} from './modules/todoUI'
import { loadDialogUI } from './modules/dialogManagerUI';
import { initDialogEvent } from './modules/dialogManager';

function init(){
    const content = document.getElementById('content');
    
    content.appendChild(loadListUI());
    content.appendChild(loadTodoUI());
    content.append(loadDialogUI());

    renderProjects();
    updateTodoHeader()
    initDialogEvent();

}

document.addEventListener("DOMContentLoaded", init);