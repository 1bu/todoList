function loadTodo(){
    //Todo Container
    const todoList = document.createElement('div');
    todoList.classList.add('todo-list');
    
    const todoHeader = document.createElement('div');
    todoHeader.classList.add('todo-header');

    const taskTitleHeader = document.createElement('h2');
    taskTitleHeader.textContent = 'Task';

    const addTodoBtn = document.createElement('button');
    addTodoBtn.classList.add('add-todo');
    addTodoBtn.setAttribute('data-open', true);
    addTodoBtn.textContent = '+';

    //Todo elements
    const todo = document.createElement('div');
    todo.classList.add('todo');

    const todoMark = document.createElement('input');
    todoMark.setAttribute('type', 'checkbox'); 
    
    const todoText = document.createElement('div');
    todoText.classList.add('todo-text');

    const todoTitle = document.createElement('h3');
    todoTitle.textContent = 'task 1';
    
    const todoDate = document.createElement('p');
    todoDate.textContent = 'Due Date: 2021-10-10';

    const todoDelete = document.createElement('button');
    todoDelete.classList.add('todo-delete');
    todoDelete.textContent = 'x';

    //////Todo Container////////
    todoHeader.appendChild(taskTitleHeader);
    todoHeader.appendChild(addTodoBtn);
    
    todoText.appendChild(todoTitle);
    todoText.appendChild(todoDate);

    todo.appendChild(todoMark);
    todo.appendChild(todoText);
    todo.appendChild(todoDelete);

    todoList.appendChild(todoHeader);
    todoList.appendChild(todo);

    return todoList;
}

export default loadTodo;

