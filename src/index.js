import './style.css';
import todaySection from './js/components/todaySection';
import nextDays from './js/components/nextDays';
import inboxSection from './js/components/inboxSection';
import workTasks from './js/components/workTasks';
import studyGoals from './js/components/studyGoals';
import travelPlans from './js/components/travelPlans';
import dailyToDos from './js/components/dailyToDos';
import lifeErrands from './js/components/lifeErrands';

const mainMenuItems = document.querySelectorAll('.list_items');
const mainSection = document.querySelector('#main_section');


mainMenuItems.forEach((mainItems) => {
    mainItems.addEventListener('click', () => {
        
        switch (mainItems.id) {
            case 'today_items':
                mainSection.innerHTML = todaySection();
                break;
            case 'next_7_days':
                mainSection.innerHTML = nextDays();
                break;
            case 'inbox_items':
                mainSection.innerHTML = inboxSection();
                break;
            case 'work_tasks':
                mainSection.innerHTML = workTasks();
                break;
            case 'study_goals':
                mainSection.innerHTML = studyGoals();
                break;
            case 'travel_plans':
                mainSection.innerHTML = travelPlans();
                break;
            case 'daily_todos':
                mainSection.innerHTML = dailyToDos();
                break;
            case 'life_errands':
                mainSection.innerHTML = lifeErrands();
                break;
            default:
                alert('Hello World');
                break;
        }

    });
});

const todoListInput = document.querySelector('#welcome_input');
const welcomeArticle = document.querySelector('#welcome_article');

todoListInput.addEventListener('keydown', (e) => {

    if (e.key === 'Enter' && todoListInput.value.trim() !== '') {
        e.preventDefault();

        const currentTodoInput = `
            <div class="todo_input_container">
                <input type="checkbox" name="welcome" class="todo_input">
                <p class="todo_details">${todoListInput.value}</p>
            </div>
        `;

        welcomeArticle.insertAdjacentHTML('beforebegin', currentTodoInput);
        todoListInput.value = '';
    }

});