import  { addTodo } from './todo.js';

function loadTodoDialog(){
    const dialog = document.createElement('dialog');
    dialog.classList.add('todo-dialog');
    dialog.setAttribute('data-modal', 'dialog');
    
    const dialogHeader = document.createElement('div');
    dialogHeader.classList.add('dialog-header');

    dialogHeader.innerHTML = `
        <h2>New Todo</h2>
        <p>Adding a new to-do to keep it more organized</p>`
    
    const formContainer = document.createElement('div');
    formContainer.classList.add('form-container');

    formContainer.innerHTML = `                    
                <form method="dialog">
                    <div class="inputs">
                        <div class="row">
                            <label for="todo-name">Todo</label>
                            <input type="text"
                                name="todo-name"
                                id="todo-name"
                                autocomplete="off"
                                required>
                        </div>

                        <div class="row">
                            <label for="todo-description">Description</label>
                            <textarea name="todo-description"
                                    id="todo-description"
                                    required>
                            </textarea>
                        </div>

                        <div class="row">
                            <label for="todo-dueDate">Due Date</label>
                            <input type="date"
                                  name="todo-dueDate"
                                  id="todo-dueDate"
                                  required>
                        </div>

                        <div class="row">
                            <label for="todo-priority">Priority</label>
                            <select name="todo-priority" id="todo-priority">
                                <option value="low-priority">Low</option>
                                <option value="medium-priority">Medium</option>
                                <option value="high-priority">High</option>
                            </select>
                        </div>
                    </div>
                    <div class="btn-container">
                        <button type="submit" class="create-btn">Create</button>
                        <button type="button" class="dialog-close close-btn">Cancel</button>
                    </div>
                </form>`;

    dialog.appendChild(dialogHeader)
    dialog.appendChild(formContainer);
    const dialogClose = formContainer.querySelector('.dialog-close');
    const dialogForm = formContainer.querySelector('form');

    //Display the dialog
    document.addEventListener('click', (e) =>{
        const openBtn = e.target.closest('[data-open]');
        if(openBtn){
            dialog.showModal();
        }
    });
    
    //Close the dialog
    dialogClose.addEventListener('click', () =>{
        dialog.close();
    });

    dialogForm.addEventListener('submit',(e)=>{
        e.preventDefault();

        const todoName = document.getElementById('todo-name');
        const todoDescription = document.getElementById('todo-description');
        const todoDueDate = document.getElementById('todo-dueDate');
        const todoPriority = document.getElementById('todo-priority');

        const newTodo = {
            id: new Date().getTime(),
            name: todoName.value.trim(),
            description: todoDescription.value.trim(),
            dueDate: todoDueDate.value,
            priority: todoPriority.value,
            completed: false
        }

        addTodo(newTodo);
        dialog.close();
        dialogForm.reset();

    });

    return dialog;
}

export default loadTodoDialog;