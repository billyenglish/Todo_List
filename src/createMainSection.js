export const createMain = function () {
    const sectionBody = document.querySelector("body");

    const createContainer = document.querySelector("#container");
    
    sectionBody.appendChild(createContainer);

    const mainSection = document.createElement("main");
    createContainer.appendChild(mainSection);

    const currentTask = document.createElement("section");
    currentTask.setAttribute("id", "current-task");
    currentTask.setAttribute("class", "section");
    mainSection.appendChild(currentTask);

    currentTask.innerHTML = `
        <h2 class="task-title">All</h2>
    `;

    const todayTask = document.createElement("section");
    todayTask.setAttribute("id", "today-task");
    todayTask.setAttribute("class", "section");
    mainSection.appendChild(todayTask);

    todayTask.innerHTML = `
        <h2 class="task-title">Today</h2>
    `;

    const weekTask = document.createElement("section");
    weekTask.setAttribute("id", "week-task");
    weekTask.setAttribute("class", "section");
    mainSection.appendChild(weekTask);

    weekTask.innerHTML = `
        <h2 class="task-title">Week</h2>
    `;

    const importantTask = document.createElement("section");
    importantTask.setAttribute("id", "important-task");
    importantTask.setAttribute("class", "section");
    mainSection.appendChild(importantTask);

    importantTask.innerHTML = `
        <h2 class="task-title">Important</h2>
    `;

    const completedTask = document.createElement("section");
    completedTask.setAttribute("id", "completed-task");
    completedTask.setAttribute("class", "section");
    mainSection.appendChild(completedTask);

    completedTask.innerHTML = `
        <h2 class="task-title">Completed</h2>
    `;
}