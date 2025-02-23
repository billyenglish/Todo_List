export const createHeader = function() {
    const sectionBody = document.querySelector("body");

    const createContainer = document.createElement("div");
    createContainer.setAttribute("id", "container");
    sectionBody.appendChild(createContainer);

    const headerSection = document.createElement("header");
    createContainer.appendChild(headerSection);

    const createNavMenu = document.createElement("nav");
    createNavMenu.setAttribute("class", "nav-menu");
    headerSection.appendChild(createNavMenu);

    createNavMenu.innerHTML = `
        <div class="nav-menu-left">
            <i class="ri-menu-line"></i>
            <h1 id="logo">Todo List</h1>
        </div>

        <div id="toggle-menu">
            <input type="checkbox" name="check" />
            <label for="check" id="button"></label>
        </div>
    `;
}