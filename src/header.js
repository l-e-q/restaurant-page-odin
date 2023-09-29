import { createHtmlElement, content } from "./index";

function render() {
    const header = createHtmlElement('header', 'header', [], '');
    content.appendChild(header);

    const nav = createHtmlElement('nav', 'menu', [], '');
    header.appendChild(nav);

    const menuList = createHtmlElement('ul', 'menu-list', [], '')
    nav.appendChild(menuList);

    ['Home', 'Menu', 'About'].forEach(menuListItem => {
        menuList.appendChild(createHtmlElement('li', '', ['menu-list-item'], menuListItem))
    });
}

export { render as renderHeader }