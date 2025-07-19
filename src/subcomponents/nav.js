export const navSection = () => {
    const navSection = document.createElement('nav');
    const logoContainer = document.createElement('div');
    const headerOne = document.createElement('h1');
    const navMenuContainer = document.createElement('div');
    const navMenu = document.createElement('ul');
    const navItems = document.createElement('li');

    logoContainer.setAttribute('class', 'logo-container');
    headerOne.setAttribute('class', 'nav-logo');
    headerOne.innerHTML = `
        <i class="ri-dashboard-line"></i>
        Todo Board
    `;

    navMenuContainer.innerHTML = `
        <ul class="pinned-projects-menu">
            <li class="menu-title">Pinned Projects</li>
            <li>
                <button class="main-menu-button">
                    <i class="ri-pushpin-2-fill start-icon"></i>
                    Pinned Projects
                    <i class="ri-arrow-drop-right-fill second-icon"></i>
                </button>
            </li>
        </ul>

        <ul class="dashboard-menu">
            <li class="menu-title">Dashboard</li>
            <li>
                <button class="main-menu-button">
                    <i class="ri-dashboard-line"></i>
                    Dashboard
                    <i class="ri-arrow-drop-right-fill second-icon"></i>
                </button>
            </li>
        </ul>

        <ul class="todo-main-menu">
            <li class="menu-title">Menu</li>

            <li class="list-section">
                <button class="main-menu-button">
                    <i class="fa-solid fa-briefcase first-icon"></i>
                    Work
                    <i class="ri-arrow-drop-right-fill second-icon"></i>
                </button>
                <ul class="work-section">
                    <li class="list-item">Meetings</li>
                    <li class="list-item">Deadlines</li>
                    <li class="list-item">Emails</li>
                    <li class="list-item">Projects</li>
                </ul>
            </li>

            <li class="list-section">
                <button class="main-menu-button">
                    <i class="fa-solid fa-person first-icon"></i>
                    Personal
                    <i class="ri-arrow-drop-right-fill second-icon"></i>
                </button>
                <ul class="personal-section">
                    <li class="list-item">Errands</li>
                    <li class="list-item">Chores</li>
                    <li class="list-item">Appointments</li>
                    <li class="list-item">Journaling</li>
                </ul>
            </li>

            <li class="list-section">
                <button class="main-menu-button">
                    <i class="fa-solid fa-notes-medical first-icon"></i>
                    Health
                    <i class="ri-arrow-drop-right-fill second-icon"></i>
                </button>
                <ul class="health-wellness-section">
                    <li class="list-item">Exercise</li>
                    <li class="list-item">Meal Planning</li>
                    <li class="list-item">Meditation</li>
                    <li class="list-item">Water Intake</li>
                </ul>
            </li>

            <li class="list-section">
                <button class="main-menu-button">
                    <i class="fa-solid fa-lines-leaning first-icon"></i>
                    Development
                    <i class="ri-arrow-drop-right-fill second-icon"></i>
                </button>
                <ul class="learning-develop-section">
                    <li class="list-item">Courses</li>
                    <li class="list-item">Reading</li>
                    <li class="list-item">Practice</li>
                    <li class="list-item">Skill building</li>
                </ul>
            </li>

            <li class="list-section">
                <button class="main-menu-button">
                    <i class="fa-solid fa-coins first-icon"></i>
                    Finance
                    <i class="ri-arrow-drop-right-fill second-icon"></i>
                </button>
                <ul class="finance-section">
                    <li class="list-item">Budgeting</li>
                    <li class="list-item">Bills</li>
                    <li class="list-item">Subscription</li>
                    <li class="list-item">Taxes</li>
                </ul>
            </li>

            <li class="list-section">
                <button class="main-menu-button">
                    <i class="fa-solid fa-people-arrows first-icon"></i>
                    Social
                    <i class="ri-arrow-drop-right-fill second-icon"></i>
                </button>
                <ul class="social-relationships-section">
                    <li class="list-item">Birthdays</li>
                    <li class="list-item">Calls &amp; messages</li>
                    <li class="list-item">Plans with friends or family</li>
                </ul>
            </li>

            <li class="list-section">
                <button class="main-menu-button">
                    <i class="fa-solid fa-diagram-project first-icon"></i>
                    Projects
                    <i class="ri-arrow-drop-right-fill second-icon"></i>
                </button>
                <ul class="projects-goals-section">
                    <li class="list-item">Side projects</li>
                    <li class="list-item">Monthly goals</li>
                    <li class="list-item">Weekly focus</li>
                </ul>
            </li>

            <li class="list-section">
                <button class="main-menu-button">
                <i class="fa-solid fa-bag-shopping first-icon"></i>
                Shopping
                <i class="ri-arrow-drop-right-fill second-icon"></i>
                </button>
                <ul class="shopping-wishlist-section">
                    <li class="list-item">Groceries</li>
                    <li class="list-item">Amazon / tech wishlist</li>
                    <li class="list-item>Clothing</li>
                </ul>
            </li>

            <li class="list-section">
                <button class="main-menu-button">
                    <i class="fa-solid fa-calendar-xmark first-icon"></i>
                    Events
                    <i class="ri-arrow-drop-right-fill second-icon"></i>
                </button>
                <ul class="travel-events-section">
                    <li class="list-item">Trip prep</li>
                    <li class="list-item">Event planning</li>
                    <li class="list-item">Packing list</li>
                </ul>
            </li>
        </ul>

        <ul class="todo-settings-menu">
            <li class="menu-title">
                Account
                <ul class="list-section">
                    <li class="list-item">
                        <button class="setting-menu-button">
                            <i class='bx  bx-user-circle'></i> 
                            Profile
                        </button>
                    </li>
                    <li class="list-item">
                        <button class="setting-menu-button">
                            <i class="fa-solid fa-gear"></i>
                            Settings
                        </button>
                    </li>
                </ul>
            </li>
        </ul>
    `;

    navSection.appendChild(logoContainer);
    logoContainer.appendChild(headerOne);
    navSection.appendChild(navMenuContainer);

    return navSection;
}