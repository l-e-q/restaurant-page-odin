import { createHtmlElement, content, switchRender } from "./index";

function render() {
    const main = createHtmlElement('main', 'main-home', ['main'], '');
    content.appendChild(main);

    const backHeadingText = createHtmlElement('p', '', ['back-heading-text'], 'Restaurant');
    main.appendChild(backHeadingText);

    const headingText = createHtmlElement('h1', '', ['heading-text'], 'Aweasome');
    main.appendChild(headingText);

    const homeHeadingHr = createHtmlElement('hr', 'home-hr', ['wide-hr'], '');
    main.appendChild(homeHeadingHr);

    const description = createHtmlElement('p', 'home-description', [], 'This just best restaurnt in the whole world, best of the best and you can eat our food.');
    main.appendChild(description);

    const homeButton = createHtmlElement('button', 'home-button', [], 'Menu');
    homeButton.addEventListener('click', () => {
        switchRender('Menu')
    });
    main.appendChild(homeButton);
}

export {render as renderHome}
