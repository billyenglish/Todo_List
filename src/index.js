import './style.css';
import "../src/style.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

import { container } from "../src/components/container.js";
import { asideSection } from "../src/components/aside.js"
import { mainSection } from "../src/components/main.js";
import { navSection } from "../src/subcomponents/nav.js";

const app = document.querySelector('#app');
const divContainer = container();
const aside = asideSection();
const main = mainSection();
const nav = navSection();

app.appendChild(divContainer);
divContainer.appendChild(aside);
divContainer.appendChild(main);
aside.appendChild(nav);