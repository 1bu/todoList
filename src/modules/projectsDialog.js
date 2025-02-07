import { addProject } from './list.js'

function loadProjectDialog(){
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
                        <button type="button" class="dialogProject-close close-btn">Cancel</button>
                    </div>
                </form> `;


    projectDialogContainer.appendChild(projectHeader);
    projectDialogContainer.appendChild(formContainer);
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
        
        newProject(projectName.value.trim())
        dialog.close();
        dialogForm.reset();
    })

    return dialog;
}

function newProject(name){
    const project = {
        id: new Date().getTime(),
        name: name,
        todos: []
    };
    addProject(project);
}

export default loadProjectDialog;