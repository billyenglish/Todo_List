const dialogModalDOM = () => {

    const createTaskButton = document.querySelector('#create_task_button');
    const dialogTaskForm = document.querySelector('#dialog');
    const closeTaskButton = document.querySelector('#close_form_button');

    const openTaskForm = () => {

        if (!dialogTaskForm.open) {
            dialogTaskForm.showModal();
        }

    }

    const closeTaskForm = () => {

        if (dialogTaskForm.open) {
            dialogTaskForm.close();
        }

    }

    createTaskButton.addEventListener('click', openTaskForm);
    closeTaskButton.addEventListener('click', closeTaskForm);

}

export default dialogModalDOM;