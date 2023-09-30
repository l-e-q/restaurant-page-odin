import { createHtmlElement, content, switchRender } from "./index";
import './reset.css';
import './style.css';

function render() {
    const header = createHtmlElement('header', 'header', [], '');
    content.appendChild(header);

    const nav = createHtmlElement('nav', 'menu', [], '');
    header.appendChild(nav);

    const menuList = createHtmlElement('ul', 'menu-list', [], '')
    nav.appendChild(menuList);

    ['Home', 'Menu', 'About'].forEach(menuListItemText => {
        const menuListItem = createHtmlElement('li', '', ['menu-list-item'], '');
        menuList.appendChild(menuListItem);

        const menuListItemButton = createHtmlElement('button', '', ['menu-list-item-button'], menuListItemText);
        menuListItemButton.addEventListener('click', () => {
            switchRender(menuListItemText)
        })
        menuListItem.appendChild(menuListItemButton);
    });
}

export { render as renderHeader }