import { addProject } from './list.js'

function loadProjectDialog(){
    const dialog = document.createElement('dialog');
    dialog.classList.add('project-dialog');
    dialog.setAttribute('project-modal','dialog');

    const projectDialogContainer = document.createElement('div');
    projectDialogContainer.classList.add('dialog-container');

    projectDialogContainer.innerHTML= `                
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
                    <button type="submit">Create</button>
                    <button type="button" class="dialogProject-close">X</button>
                </form> `;
    dialog.appendChild(projectDialogContainer);

    const dialogClose = projectDialogContainer.querySelector('.dialogProject-close');
    const dialogForm = projectDialogContainer.querySelector('form');

    //Display dialog
    document.addEventListener('click', (e)=>{
        const openBtn = e.target.closest('[project-data]');
        if(openBtn){
            dialog.showModal();
        }
    });

    //Close dialog
    dialogClose.addEventListener('click',()=>{
        dialog.close();
    });

    dialogForm.addEventListener('submit', (e)=>{
        e.preventDefault();

        const projectName = document.getElementById('project-name');

        const newProject = {
            id: new Date().getTime(),
            name: projectName.value.trim(),
            todos: []
        };

        addProject(newProject);
        dialog.close();
        dialogForm.reset();
    })

    return dialog;
}

export default loadProjectDialog;