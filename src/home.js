import { createHtmlElement, content, switchRender } from "./index";
import './reset.css';
import './style.css';


function render() {
    const main = createHtmlElement('main', 'main-home', ['main'], '');
    content.appendChild(main);

    const backHeadingText = createHtmlElement('p', '', ['back-heading-text'], '"Symphony of Flavors"');
    main.appendChild(backHeadingText);

    const headingText = createHtmlElement('h1', '', ['heading-text'], 'Restaurant');
    main.appendChild(headingText);

    const homeHeadingHr = createHtmlElement('hr', 'home-hr', ['wide-hr'], '');
    main.appendChild(homeHeadingHr);

    const description = createHtmlElement('p', 'home-description', [], "Step into the Past, Satisfy Your Present Appetite. Savor the Flavors of Yesteryears, Crafted for Today's Palate");
    main.appendChild(description);

    const homeButton = createHtmlElement('button', 'home-button', [], 'Menu');
    homeButton.addEventListener('click', () => {
        switchRender('Menu')
    });
    main.appendChild(homeButton);
}

export {render as renderHome}
