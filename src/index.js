import './style.css';
import { renderHeader } from './header';
import { renderHome } from './home';
import { renderFooter } from './footer';
import { renderMenu } from './menu';
import { renderAbout } from './about';
import { Icon } from './github-mark.png';

const content = document.querySelector('div#content');

function createHtmlElement(tag, id, arrayClasses, content) {
    const element = document.createElement(tag);
    if (id) element.id = id;
    if (arrayClasses) {
        arrayClasses.forEach((Class) => {
            element.classList.add(Class)
        });
        
    }
    if (content) element.innerText = content;
    return element; 
}

function home() {
    content.innerHTML = '';
    renderHeader();
    renderHome();
    renderFooter();
}

function menu() {
    content.innerHTML = '';
    renderHeader();
    renderMenu();
    renderFooter();
}

function about() {
    content.innerHTML = '';
    renderHeader();
    renderAbout();
    renderFooter();
}

home();
// menu();
// about();
export {createHtmlElement, content}
