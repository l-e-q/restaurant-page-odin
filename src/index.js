import './style.css';
import { renderHeader } from './header';
import { renderHome } from './home';

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
    // renderFooter();
}

home();
export {createHtmlElement, content}
