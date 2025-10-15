import './style.css';
import './assets/styles/asidebar.css';
import './assets/styles/main.css';
import './assets/styles/mediaquery.css';
import './assets/styles/dialog.css';

const dialogForm = document.querySelector('#dialog');
const createTaskButton = document.querySelector('#create_task_button');

createTaskButton.addEventListener('click', () => {
    dialogForm.showModal();
})