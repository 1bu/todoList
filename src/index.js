import './style.css';
import loadTodo from './modules/todo';
import loadTask from './modules/task';
import loadDialog from './modules/dialog';

function init(){
    const content = document.getElementById('content');
    content.classList.add('container');
    
    content.appendChild(loadTask());
    content.appendChild(loadTodo());
    content.appendChild(loadDialog());
}

init();