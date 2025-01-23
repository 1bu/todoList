function loadDialog(){
    const dialog = document.createElement('dialog');
    dialog.classList.add('dialog');
    dialog.setAttribute('data-modal', 'true');

    const dialogContainer = document.createElement('div');
    dialogContainer.classList.add('dialog-container');

    dialogContainer.innerHTML = `                    
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
                                    required></textarea>
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
                </form>`

    const dialogCreate = document.createElement('button');
    dialogCreate.classList.add('dialog-close');
    dialogCreate.setAttribute('data-close', 'true');
    dialogCreate.textContent = 'Create';

    const dialogClose = document.createElement('button');
    dialogClose.classList.add('dialog-close');
    dialogClose.setAttribute('data-close', 'true');
    dialogClose.textContent = 'x';
    

    dialogContainer.appendChild(dialogClose);
    dialogContainer.appendChild(dialogCreate);

    dialog.appendChild(dialogContainer);

    //Display the dialog
    document.addEventListener('click', (e) =>{
        const openBtn = e.target.closest('[data-open]');
        if(openBtn){
            dialog.showModal();
        }
    });
    
    dialogClose.addEventListener('click', () =>{
        dialog.close();
    });

    return dialog
}

export default loadDialog;