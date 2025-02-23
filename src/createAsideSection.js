export const createAside = function () {
    const createContainer = document.querySelector("#container");

    const asideSection = document.createElement("aside");
    asideSection.setAttribute("id", "aside");
    createContainer.appendChild(asideSection);

    const navAside = document.createElement("nav");
    navAside.setAttribute("class", "nav-aside");
    asideSection.appendChild(navAside);

    navAside.innerHTML = `
        <div>
            <h3 class="my-list">My List</h3>

            <ul class="aside-menu">
                <li class="nav-item all-items"><i class="ri-calendar-view"></i> All</li>
                <li><i class="ri-calendar-event-line"></i> Today</li>
                <li><i class="ri-calendar-todo-line"></i> Week</li>
                <li><i class="ri-calendar-schedule-fill"></i> Important</li>
                <li><i class="ri-calendar-check-fill"></i> Completed</li>
            </ul>
        </div>

        <div>
            <div class="create-list">
                <h3 class="my-list">Create List</h3>

                <button type="button" id="create-task" class="create-task">Create Task</button>
            </div>

            <ul class="create-menu">
                <li class="create-task"><div><i class="ri-list-check"></i>Create Task</div><div><i class="ri-edit-box-fill"></i><i class="ri-delete-bin-line"></i></div></li>
                <li class="create-project"><div><i class="ri-list-check"></i>Create Project</div><div><i class="ri-edit-box-fill"></i><i class="ri-delete-bin-line"></i></div></li>
            </ul>
        </div>
    `;
}