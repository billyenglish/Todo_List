export const navSection = () => {
    const navSection = document.createElement('nav');
    const logoContainer = document.createElement('div');
    const headerOne = document.createElement('h1');

    logoContainer.setAttribute('class', 'logo-container');
    headerOne.setAttribute('class', 'nav-logo');
    headerOne.innerHTML = `
        <i class="ri-list-check"></i>
        Todo List
    `;

    navSection.appendChild(logoContainer);
    logoContainer.appendChild(headerOne);

    return navSection;
}