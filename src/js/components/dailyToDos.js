const dailyToDos = () => {

    return `
        <section id="main_section" class="today_section">
            <header class="header">
                <div class="header_container">
                    <div class="main_section_container">
                        <i class="ri-menu-unfold-4-line"></i>
                        <h2 id="header_title">Daily Tod-Dos</h2>
                    </div>

                    <div>
                        <ul id="header_menu_list">
                            <li class="header_list_items">
                                <i class="ri-sort-desc"></i>
                            </li>
                            <li class="header_list_items second_item_header">
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="header_search_container">
                    <div class="search_container">
                        <input
                            type="text"
                            name="today_search"
                            class="search_input"
                            id="today_search"
                            placeholder="+ Add task"
                        >
                        <div class="search_display">
                            <i class="ri-calendar-event-fill"></i>
                            <i class="ri-arrow-drop-down-line"></i>
                        </div>
                    </div>
                </div>
            </header>
        </section>
    `;
};

export default dailyToDos;