export function createProjectDialog(){
    const dialog = document.createElement('dialog');
    dialog.classList.add('project-dialog');
    dialog.setAttribute('project-modal','dialog');

    const projectDialogContainer = document.createElement('div');
    projectDialogContainer.classList.add('dialog-container');

    const projectHeader = document.createElement('div');
    projectHeader.innerHTML = `
        <h2>New Project</h2>
        <p>Add a new project </p>`

    const formContainer = document.createElement('div');
    formContainer.classList.add('form-container');

    formContainer.innerHTML= `                
                <form method="dialog">
                    <div class="inputs">
                        <div class="row">
                            <label for="project-name">Project</label>
                            <input type="text"
                                name="project-name"
                                id="project-name"
                                autocomplete="off"
                                required>
                        </div>
                    </div>
                    <div class="btn-container">
                        <button type="submit" class="create-btn">Create</button>
                        <button type="button" class="dialog-close close-btn">Cancel</button>
                    </div>
                </form> `;


    projectDialogContainer.appendChild(projectHeader);
    projectDialogContainer.appendChild(formContainer);
    dialog.appendChild(projectDialogContainer);

    return dialog;
}

////////////////////////////TODO DIALOG////////////////

export function createTodoDialog(){
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

    return dialog;
}

export function loadDialogUI(){
    const container = document.createElement('div');
    container.append(createProjectDialog(), createTodoDialog());
    return container;
}