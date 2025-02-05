import './style.css';
import loadTodo, {renderTodo} from './modules/todo';
import loadList, {renderProjects} from './modules/list';
import loadTodoDialog from './modules/todoDialog';
import loadProjectDialog from './modules/projectsDialog';

function init(){
    const content = document.getElementById('content');
    
    content.appendChild(loadList());
    content.appendChild(loadTodo());
    content.appendChild(loadTodoDialog());
    content.appendChild(loadProjectDialog());

    renderProjects();
    renderTodo();

}

document.addEventListener("DOMContentLoaded", init);