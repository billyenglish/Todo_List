export const mainSection = () => {
    const main = document.createElement('main');
    main.innerHTML = `
        <section>
            <div class="header-section">
                <div class="header-main">
                    <i class="ri-pushpin-2-fill header-icon"></i>
                    <h2 class="main-title">Pinned Project</h2>
                </div>

                <div>
                    <button>
                        +
                    </button>
                    <button>
                        Create Task
                    </button>
                </div>
            </div>
            <div class="subheader-section">
                <div>
                    <ul class="subheader-list">
                        <li>Overview</li>
                        <li>List</li>
                        <li>Board</li>
                        <li>Timeline</li>
                    </ul>
                </div>

                <div>
                    <ul class="subheader-list">
                        <li>
                            <button>
                                <i class="ri-sound-module-line"></i>
                                Filter
                            </button>
                        </li>
                        <li>
                            <button>
                                <i class="ri-sound-module-line"></i>
                                Sort
                            </button>
                        </li>
                        <li>
                            <i class="ri-search-line"></i>
                            <input >
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="todo-main">
            <div class="todo-container">
                <div class="todo-header-section">
                    <div>
                        <h3 class="todo-section-title">Todo List</h3>
                    </div>

                    <div>
                        <i class="fa-solid fa-ellipsis-vertical toggle-todo"></i>
                    </div>
                </div>
            </div>
            <div class="todo-container">
                <div class="todo-header-section">
                    <div>
                        <h3 class="todo-section-title">In Progress</h3>
                    </div>

                    <div>
                        <i class="fa-solid fa-ellipsis-vertical toggle-todo"></i>
                    </div>
                </div>
            </div>
            <div class="todo-container">
                <div class="todo-header-section">
                    <div>
                        <h3 class="todo-section-title">Done</h3>
                    </div>

                    <div>
                        <i class="fa-solid fa-ellipsis-vertical toggle-todo"></i>
                    </div>
                </div>
            </div>
            <div class="todo-container">
                <div class="todo-header-section">
                    <div>
                        <h3 class="todo-section-title">Review</h3>
                    </div>

                    <div>
                        <i class="fa-solid fa-ellipsis-vertical toggle-todo"></i>
                    </div>
                </div>
            </div>
        </section>
    `;

    return main;
}