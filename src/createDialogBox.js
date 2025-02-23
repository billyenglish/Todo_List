export const createDialog = function () {
    const createContainer = document.querySelector("#container");

    const dialogBox = document.createElement("dialog");
    createContainer.appendChild(dialogBox);

    dialogBox.innerHTML = `
        <form id="todo-form">
            <i class="close-form ri-close-large-line"></i>
            <p class="form-title">Create My List</p>
            <div class="form-input">
                <input type="text" name="project-task-title" id="project-task-title" placeholder="Project Title" />
                <input type="text" name="subject-description" id="subject-description" placeholder="Subject Description" />
            </div>
            <div class="form-input">
                <input type="text" name="" id="" placeholder="" />
                <select name="project-task-importance" id="">
                    <option>Level of Importance</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                </select>
            </div>
            <div class="form-textarea">
                <textarea name="todo-description" id="todo-description"></textarea>
            </div>
            <div class="form-controls">
                <button type="button">Cancel</button>
                <button type="button">Submit</button>
            </div>
        </form>
    `;
}