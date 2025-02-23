export const createFooter = function () {
    const createContainer = document.querySelector("#container");

    const footerSection = document.createElement("footer");
    createContainer.appendChild(footerSection);
    footerSection.innerHTML = `
        <p>Todo List &copy; Copyright <span>2025</span> by Billy English</p>
    `;
}